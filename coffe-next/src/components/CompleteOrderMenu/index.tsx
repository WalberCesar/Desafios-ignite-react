import { ProductProps } from "../../contexts/types";
import { useCart } from "../../contexts/useCartContext";
import CardCoffeSelected from "../CardCoffeSelected";
import { ContainerCompleteOrderMenu, ContainerTotalPrice } from "./index.style";

export default function CompleteOrderMenu() {
  const { cartList } = useCart();
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

  const quantityItemsInCart = cartList.length;

  return (
    <ContainerCompleteOrderMenu>
      {cartList.map((item) => (
        <CardCoffeSelected
          key={item.id as string}
          coffe={item as ProductProps}
        />
      ))}

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
        <button disabled={quantityItemsInCart <= 0}>Confirmar Pedido</button>
      </footer>
    </ContainerCompleteOrderMenu>
  );
}
