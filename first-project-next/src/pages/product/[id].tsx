import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import Button from "../../components/Button";

import { ProductProps } from "../../contexts/CartContext/types";
import { useCart } from "../../contexts/CartContext/useContext";

import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface Props {
  product: ProductProps;
}
export default function Product({ product }: Props) {
  const { addProductInCart, checkAlreadyProductExistsInCart } = useCart();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <Button
            disabled={checkAlreadyProductExistsInCart(product.id)}
            onClick={() => addProductInCart(product)}
            text={
              !checkAlreadyProductExistsInCart(product.id)
                ? "Colocar na sacola"
                : "Produto ja esta na sacola!"
            }
          />
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price: Stripe.Price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
        numberPrice: price.unit_amount! / 100,
      },
    },
    revalidate: 60 * 60 * 1,
  };
};
