import Image from "next/image";
import {
  HomeContainer,
  BannerHome,
  Content,
  Icon,
  ContentIcon,
  ContainerContent,
  ContainerIcon,
  CoffeList,
  Title,
} from "../styles/Pages/home";
import bannerImg from "../assets/imagem.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Card from "../components/Card";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";

import { ProductProps } from "../contexts/types";
import Head from "next/head";
import Stripe from "stripe";

type HomeProps = {
  products: ProductProps[];
};

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Coffe delivery | Home</title>
      </Head>
      <HomeContainer>
        <BannerHome>
          <Content>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>

            <ContainerContent>
              <ContentIcon>
                <Icon>
                  <ContainerIcon color={"orange"}>
                    <ShoppingCart weight="fill" />
                  </ContainerIcon>

                  <p>Compra simples e segura</p>
                </Icon>
                <Icon>
                  <ContainerIcon color={"gray"}>
                    <Package weight="fill" />
                  </ContainerIcon>
                  <p>Embalagem mantém o café intacto</p>
                </Icon>
              </ContentIcon>
              <ContentIcon>
                <Icon>
                  <ContainerIcon color={"yellow"}>
                    <Timer weight="fill" />
                  </ContainerIcon>
                  <p>Entrega rápida e rastreada</p>
                </Icon>
                <Icon style={{ left: -6, position: "relative" }}>
                  <ContainerIcon color={"purple"}>
                    <Coffee weight="fill" />
                  </ContainerIcon>
                  <p>O café chega fresquinho até você</p>
                </Icon>
              </ContentIcon>
            </ContainerContent>
          </Content>

          <Image src={bannerImg} alt="" />
        </BannerHome>
        <Title>Nossos cafés</Title>
        <CoffeList>
          {products.map((coffe) => (
            <Card key={coffe.id} coffe={coffe} />
          ))}
        </CoffeList>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products: ProductProps[] = response.data.map((item) => {
    const price = item.default_price as Stripe.Price;
    return {
      id: item.id,
      name: item.name,
      description: String(item.description),
      type: "tradicional",
      price: price.unit_amount! / 100,
      imageUrl: item.images[0],
      quantity: 1,
      defaultPriceId: price.id,
    };
  });
  return {
    props: {
      products,
    },
  };
};
