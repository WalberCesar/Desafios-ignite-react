import { NextApiRequest, NextApiResponse } from "next";
import { ProductProps } from "../../contexts/CartContext/types";

import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: ProductProps[] };
  const succesUrl = `${process.env.NEXT_URL}/succes?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!products) {
    return res.status(400).json({ error: "Price not found" });
  }

  const checkoutsession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: succesUrl,
    mode: "payment",
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  });

  return res.status(201).json({
    checkoutUrl: checkoutsession.url,
  });
}
