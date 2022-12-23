import { ShoppingCartSimple } from "phosphor-react";
import { UseFormHandleSubmit } from "react-hook-form";
import { FormProps, ProductProps } from "../../contexts/types";
import { useCart } from "../../contexts/useCartContext";
import CardCoffeSelected from "../CardCoffeSelected";
import {
  ContainerCompleteOrderMenu,
  ContainerNotExistsCoffeInCart,
  ContainerTotalPrice,
} from "./index.style";

type CompleteOrderMenuProps = {
  handleBuyCoffesInCart(): Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormProps>;
};

export default function CompleteOrderMenu({
  handleBuyCoffesInCart,
  handleSubmit,
}: CompleteOrderMenuProps) {
  const { cartList, quantityItemsInCart } = useCart();

  const priceFrete = cartList.length > 0 ? 3.5 : 0;
  const FormatedPriceFrete = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceFrete);

  const priceTotalItems = cartList
    .map((item) => item.price * item.quantity!)
    .reduce((item, acumulator) => {
      return item + acumulator;
    }, 0);

  const formatedPriceTotalItems = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceTotalItems);

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceTotalItems + priceFrete);

  return (
    <ContainerCompleteOrderMenu>
      {cartList.map((item) => (
        <CardCoffeSelected
          key={item.id as string}
          coffe={item as ProductProps}
        />
      ))}

      {quantityItemsInCart === 0 && (
        <ContainerNotExistsCoffeInCart>
          <h1>Seu carrinho esta vazio!</h1>
          <ShoppingCartSimple size={40} />
        </ContainerNotExistsCoffeInCart>
      )}

      <footer>
        <ContainerTotalPrice>
          <div>
            <p>Total de Itens</p>
            <p>{formatedPriceTotalItems}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p> {FormatedPriceFrete}</p>
          </div>
          <div>
            <p>Total </p>
            <p>{totalPrice}</p>
          </div>
        </ContainerTotalPrice>
        <button
          onClick={handleBuyCoffesInCart}
          // disabled={quantityItemsInCart <= 0}
        >
          Confirmar Pedido
        </button>
      </footer>
    </ContainerCompleteOrderMenu>
  );
}
