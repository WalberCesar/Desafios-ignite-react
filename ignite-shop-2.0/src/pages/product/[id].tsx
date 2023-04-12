import { GetStaticPaths, GetStaticProps } from 'next'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'

import Head from 'next/head'
import CartButton from '@/src/components/CartButton'
import { useCart } from '@/src/contexts/useCart'
import { ProductsProps } from '@/src/contexts/types'

interface Props {
  product: ProductsProps
}

export default function Product({ product }: Props) {
  const { addProductInCart, checkAlreadyProductExistsInCart } = useCart()

  function handleAddProductInCart(product: ProductsProps) {
    addProductInCart(product)
  }

  return (
    <>
      {' '}
      <Head>
        <title>{product.name} | Ignite shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <CartButton
            disabled={checkAlreadyProductExistsInCart(product.id)}
            onClick={() => handleAddProductInCart(product)}
            text={
              checkAlreadyProductExistsInCart(product.id) === false
                ? 'Colocar na sacola'
                : 'Produto ja adicionado na sacola'
            }
          />
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: 'prod_MyFfOVpDrY2qye' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price: Stripe.Price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        imageUrl: product.images[0],
        name: product.name,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
