import { ProductsProps } from '@/src/contexts/types'
import { stripe } from '@/src/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const cartProducts: ProductsProps[] = req.body.cartProducts

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!cartProducts) {
    return res.status(404).json({ error: 'Price not found' })
  }
  const succesUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',

    line_items: cartProducts.map((product) => {
      return {
        quantity: 1,
        price: product.defaultPriceId,
      }
    }),
    success_url: succesUrl,
    cancel_url: cancelUrl,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
