import axios from "axios";
import Head from "next/head";
import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CompleteOrderMenu from "../components/CompleteOrderMenu";
import FormAdrees from "../components/FormAdrees";
import { FormProps, ProductProps } from "../contexts/types";
import { useCart } from "../contexts/useCartContext";
import {
  Button,
  ConfirmOrderConatiner,
  HeaderPayamentContainer,
  MethodPayamentContainer,
  PayamentContainer,
  ContainerAdreesAndPayament,
  TitleText,
  ContainerCompleteOrderMenu,
} from "../styles/Pages/ConfirmOrder";
export default function ConfirmOrder() {
  const { cartList } = useCart();
  const { register, handleSubmit } = useForm<FormProps>();
  const [dataAdrees, setDataAdrees] = useState<FormProps>({} as FormProps);

  async function handleBuyCoffesInCart() {
    //
    //   bairro: bairro,
    //   cep: cep,
    //   cidade: cidade,
    //   complemento: complemento,
    //   numero: numero,
    //   rua: rua,
    //   uf: uf,
    //   pagamento: pagamento,
    // };

    // console.log(data);
    // setDataAdrees(data);

    try {
      const response = await axios.post("/api/checkout", {
        cartList,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert("falha ao direcionar para o pagamento");
    }
  }

  return (
    <>
      <Head>
        <title>Coffe Delivey | Confirm Order</title>
      </Head>
      <ConfirmOrderConatiner>
        <ContainerAdreesAndPayament>
          <TitleText>Complete seu pedido</TitleText>
          <FormAdrees register={register} />
          <PayamentContainer>
            <HeaderPayamentContainer>
              <CurrencyDollar weight="regular" />
              <div>
                <h1>Pagamento</h1>
                <strong>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </strong>
              </div>
            </HeaderPayamentContainer>

            <MethodPayamentContainer>
              <Button border={"select"}>
                <CreditCard weight="regular" />
                <p>CARTÃO DE CRÉDITO</p>
              </Button>
              <Button>
                <Bank weight="regular" />
                <p>CARTÃO DE DÉBITO</p>
              </Button>
              <Button>
                <Money weight="regular" />
                <p>DINHEIRO</p>
              </Button>
            </MethodPayamentContainer>
          </PayamentContainer>
        </ContainerAdreesAndPayament>

        <ContainerCompleteOrderMenu>
          <TitleText>Cafés selecionados</TitleText>
          <CompleteOrderMenu
            handleSubmit={handleSubmit}
            handleBuyCoffesInCart={handleBuyCoffesInCart}
          />
        </ContainerCompleteOrderMenu>
      </ConfirmOrderConatiner>
    </>
  );
}
