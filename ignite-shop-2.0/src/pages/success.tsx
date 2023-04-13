import Link from 'next/link'
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

interface SuccessProps {
  images: string[][]
  customerName: string
}

export default function Success({ customerName, images }: SuccessProps) {
  const quantityItemsInCart = images.length
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {images.map((images) => {
            return images.map((imageUrl) => {
              return (
                <ImageContainer key={imageUrl}>
                  <Image src={imageUrl} width={120} height={110} alt="" />
                </ImageContainer>
              )
            })
          })}
        </ImagesContainer>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {quantityItemsInCart} ja está a caminho da sua casa
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: { destination: '/' },
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const images = session.line_items?.data.map((item) => {
    const product: Stripe.Product = item.price?.product as Stripe.Product

    return product.images.map((image) => {
      return image
    })
  })

  const customerName = String(session.customer_details?.name)
  return {
    props: {
      images,
      customerName,
    },
  }
}
