import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { ProductProps } from "../../contexts/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cartList } = req.body as { cartList: ProductProps[] };

  const successUrl = `${process.env.NEXT_URL}/Success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!cartList) {
    return res.status(400).json({ error: "Price not found" });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: cartList.map((item) => ({
      price: item.defaultPriceId,
      quantity: item.quantity,
    })),
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
