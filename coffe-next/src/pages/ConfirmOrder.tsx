import axios from "axios";
import Head from "next/head";
import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import { useEffect, useState } from "react";
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

type ErrorsType = {
  errors: {
    [key: string]: {
      message: string;
    };
  };
};

export default function ConfirmOrder() {
  const { cartList, setCartList, quantityItemsInCart } = useCart();
  const { register, handleSubmit, formState } = useForm<FormProps>();
  const { errors } = formState as unknown as ErrorsType;
  const [methodPayament, setMethodPayament] = useState<string>("");
  useEffect(() => {
    if (quantityItemsInCart <= 0) {
      setMethodPayament("");
    }
  }, [quantityItemsInCart]);

  async function handleBuyCoffesInCart({
    bairro,
    cep,
    cidade,
    complemento,
    numero,
    rua,
    uf,
    pagamento,
  }: FormProps) {
    try {
      if (methodPayament === "") {
        alert("Adicione uma forma de pagamento");
      } else {
        const dataForm = {
          bairro: bairro,
          cep: cep,
          cidade: cidade,
          complemento: complemento,
          numero: numero,
          rua: rua,
          uf: uf,
          pagamento: methodPayament,
        };

        const dataFormString = await JSON.stringify(dataForm);
        await localStorage.setItem("coffe_next_addres", dataFormString);

        const dataAdreesAndCartList = cartList.map((item) => {
          return {
            name: item.name,
            id: item.id,
            description: item.description,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: item.quantity,
            formatedPrice: new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.price),
            type: item.type,
            defaultPriceId: item.defaultPriceId,
            addres: dataForm,
          };
        });

        setCartList(dataAdreesAndCartList);

        const response = await axios.post("/api/checkout", {
          cartList,
        });

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl;

        const data = {
          bairro: bairro,
          cep: cep,
          cidade: cidade,
          complemento: complemento,
          numero: numero,
          rua: rua,
          uf: uf,
          pagamento: pagamento,
        };
      }
    } catch (err) {
      if (methodPayament !== "") {
        alert("falha ao direcionar para o pagamento");
      }
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
          <FormAdrees error={errors} register={register} />
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
              {methodPayament === "Cartão de crédito" ? (
                <Button
                  disabled={quantityItemsInCart <= 0}
                  onClick={() => setMethodPayament("")}
                  border={"select"}
                >
                  <CreditCard weight="regular" />
                  <p>CARTÃO DE CRÉDITO</p>
                </Button>
              ) : (
                <Button
                  disabled={quantityItemsInCart <= 0}
                  onClick={() => setMethodPayament("Cartão de crédito")}
                >
                  <CreditCard weight="regular" />
                  <p>CARTÃO DE CRÉDITO</p>
                </Button>
              )}

              {methodPayament === "Cartão de débito" ? (
                <Button
                  disabled={quantityItemsInCart <= 0}
                  onClick={() => setMethodPayament("")}
                  border={"select"}
                >
                  <Bank weight="regular" />
                  <p>CARTÃO DE DÉBITO</p>
                </Button>
              ) : (
                <Button
                  disabled={quantityItemsInCart <= 0}
                  onClick={() => setMethodPayament("Cartão de débito")}
                >
                  <Bank weight="regular" />
                  <p>CARTÃO DE DÉBITO</p>
                </Button>
              )}

              {methodPayament === "Dinheiro" ? (
                <Button
                  disabled={quantityItemsInCart <= 0}
                  onClick={() => setMethodPayament("")}
                  border={"select"}
                >
                  <Money weight="regular" />
                  <p>DINHEIRO</p>
                </Button>
              ) : (
                <Button
                  disabled={quantityItemsInCart <= 0}
                  onClick={() => setMethodPayament("Dinheiro")}
                >
                  <Money weight="regular" />
                  <p>DINHEIRO</p>
                </Button>
              )}
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
