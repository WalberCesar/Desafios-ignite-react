import Image from "next/image";
import camiseta1 from "../assets/camisetas/1.png";
import camiseta2 from "../assets/camisetas/2.png";
import camiseta3 from "../assets/camisetas/3.png";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { GetServerSideProps, GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import Link from "next/link";
import Head from "next/head";

interface ProductProps {
  products: { id: string; name: string; imageUrl: string; price: number }[];
}
export default function Home({ products }: ProductProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | ignite shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const price = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price);
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{price}</span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    };
  });
  return {
    props: {
      products,
    },
  };
};
