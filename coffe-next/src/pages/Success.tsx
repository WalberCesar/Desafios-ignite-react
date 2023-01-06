import Image from "next/image";
import { CurrencyDollar, MapPin, Timer, User } from "phosphor-react";
import {
  BuyInformations,
  ContainerIcon,
  ContainerSuccess,
  Content,
  Itens,
} from "../styles/Pages/Success";

import imgSuccess from "../assets/Illustration.png";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { useEffect, useState } from "react";
import { FormProps } from "../contexts/types";

interface SuccesProps {
  costumerName: string;
  productImages: string[];
  totalPrice: string;
}

export default function Success({ costumerName, totalPrice }: SuccesProps) {
  const [addres, setAddres] = useState<FormProps>({} as FormProps);

  useEffect(() => {
    async function getAddres() {
      const response = await localStorage.getItem("coffe_next_addres");
      const responseJSON = await JSON.parse(response!);
      setAddres(responseJSON);
    }
    getAddres();
  }, []);

  return (
    <>
      {" "}
      <Head>
        <title>Coffe Delivey | Success</title>
      </Head>
      <ContainerSuccess>
        <Content>
          <h1>Uhu! Pedido confirmado</h1>
          <strong>Agora é só aguardar que logo o café chegará até você</strong>
          <BuyInformations>
            <Itens>
              <ContainerIcon color={"black"}>
                <User weight="fill" />
              </ContainerIcon>
              <p>{costumerName}</p>
            </Itens>
            <Itens>
              <ContainerIcon color={"purple"}>
                <MapPin weight="fill" />
              </ContainerIcon>
              <p>
                Entrega em{" "}
                <b>
                  Rua {addres.rua}, {addres.numero}{" "}
                </b>
                <br /> {addres.bairro}- {addres.cidade}, {addres.uf}
              </p>
            </Itens>
            <Itens>
              <ContainerIcon color={"yellow"}>
                <Timer weight="fill" />
              </ContainerIcon>
              <p>
                Previsão de entrega
                <br /> <b>20 min - 30 min</b>
              </p>
            </Itens>
            <Itens>
              <ContainerIcon color={"orange"}>
                <CurrencyDollar weight="fill" />
              </ContainerIcon>
              <p>
                <b>Total:</b> {totalPrice}
                <br /> <b>Forma de pagamento:</b> {addres.pagamento}
              </p>
            </Itens>
          </BuyInformations>
        </Content>

        <Image src={imgSuccess} width={492} height={293} alt="" />
      </ContainerSuccess>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  console.log("response => ", response);
  const costumerName = response.customer_details?.name as string;
  const productImages = response.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return product.images;
  });
  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(response.amount_total) / 100);
  return {
    props: {
      costumerName,
      productImages,
      totalPrice,
    },
  };
};
