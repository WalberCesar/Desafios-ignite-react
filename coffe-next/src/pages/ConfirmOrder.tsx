import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import CompleteOrderMenu from "../components/CompleteOrderMenu";
import FormAdrees from "../components/FormAdrees";
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

  return (
    <>
      <ConfirmOrderConatiner>
        <ContainerAdreesAndPayament>
          <TitleText>Complete seu pedido</TitleText>
          <FormAdrees />
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
          <CompleteOrderMenu />
        </ContainerCompleteOrderMenu>
      </ConfirmOrderConatiner>
    </>
  );
}
