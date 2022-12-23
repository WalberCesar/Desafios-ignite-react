import Image from "next/image";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  BuyInformations,
  ContainerIcon,
  ContainerSuccess,
  Content,
  Itens,
} from "../styles/Pages/Success";

import imgSuccess from "../assets/Illustration.png";
import Head from "next/head";

export default function Success() {
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
              <ContainerIcon color={"purple"}>
                <MapPin weight="fill" />
              </ContainerIcon>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102 </b>
                <br /> Farrapos- Porto Alegre, RS
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
                Pagamento na entrega
                <br /> <b>Cartão de crédito</b>
              </p>
            </Itens>
          </BuyInformations>
        </Content>

        <Image src={imgSuccess} width={492} height={293} alt="" />
      </ContainerSuccess>
    </>
  );
}
