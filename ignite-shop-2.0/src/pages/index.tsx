import { HomeContainer, Product } from '../styles/pages/home'

import Head from 'next/head'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Button from '../components/Button'
import { useCart } from '../contexts/useCart'
import { ProductsProps } from '../contexts/types'
import { MouseEvent } from 'react'

interface HomeProps {
  products: ProductsProps[]
}

export default function Home({ products }: HomeProps) {
  const { addProductInCart, checkAlreadyProductExistsInCart } = useCart()

  function handleAddProductInCart(
    product: ProductsProps,
    e: MouseEvent<HTMLButtonElement>,
  ) {
    e.preventDefault()
    addProductInCart(product)
  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 32,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              href={`/product/${product.id}`}
              key={product.id}
              className="keen-slider__slide"
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <Button
                  onClick={(e) => handleAddProductInCart(product, e)}
                  colors="greenButton"
                  disabled={checkAlreadyProductExistsInCart(product.id)}
                />
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })
  const products = response.data.map((product) => {
    const price: Stripe.Price = product.default_price as Stripe.Price
    return {
      id: product.id,
      imageUrl: product.images[0],
      name: product.name,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      description: product.description,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
