import { HomeContainer, Product, SliderContainer } from "../styles/pages/home";

import Image from "next/image";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { useCart } from "../contexts/CartContext/useContext";
import { ProductProps } from "../contexts/CartContext/types";
import { MouseEvent, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CartButton } from "../components/CartButton";
import { ProductSkeleton } from "../components/ProductSkeleton";

interface HomeProps {
  products: ProductProps[];
}
export default function Home({ products }: HomeProps) {
  const { addProductInCart, checkAlreadyProductExistsInCart } = useCart();
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });
  const [isLoading, setIsLoading] = useState(true);

  function handleAddProductInCart(
    e: MouseEvent<HTMLButtonElement>,
    product: ProductProps
  ) {
    e.preventDefault();
    addProductInCart(product);
  }

  useEffect(() => {
    //fake isLoadind
    const timeOut = setTimeout(() => setIsLoading(false), 2500);
  }, []);
  useEffect(() => {
    //fake isLoadind
    const timeOut = setTimeout(() => setIsLoading(false), 3000);
  }, [isLoading]);

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {isLoading ? (
                <>
                  <ProductSkeleton className="embla__slide" />
                  <ProductSkeleton className="embla__slide" />
                  <ProductSkeleton className="embla__slide" />
                </>
              ) : (
                <>
                  {" "}
                  {products.map((product) => {
                    return (
                      <Product key={product.id} className="embla__slide">
                        <Image
                          src={product.imageUrl}
                          width={420}
                          height={380}
                          alt=""
                        />

                        <footer>
                          <div>
                            <Link
                              href={`/product/${product.id}`}
                              key={product.id}
                              prefetch={false}
                            >
                              <strong onClick={() => setIsLoading(!isLoading)}>
                                {product.name}
                              </strong>
                            </Link>
                            <span>{product.price}</span>
                          </div>
                          <div>
                            <CartButton
                              showCounter={false}
                              color={"green"}
                              size={"large"}
                              disabled={checkAlreadyProductExistsInCart(
                                product.id
                              )}
                              onClick={(e) => {
                                handleAddProductInCart(e, product);
                              }}
                            />
                          </div>
                        </footer>
                      </Product>
                    );
                  })}
                </>
              )}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products: ProductProps[] = response.data.map((product) => {
    const price: Stripe.Price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
      defaultPriceId: price.id,
      description: product.description as string,
      numberPrice: price.unit_amount! / 100,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
