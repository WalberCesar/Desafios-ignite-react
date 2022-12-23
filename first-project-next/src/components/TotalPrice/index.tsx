import { TotalPriceContainer } from "./index.style";
import { X } from "phosphor-react";
import { useCart } from "../../contexts/CartContext/useContext";

export default function TotalPrice() {
  const { formatedTotalPrice, cartProduct, QuantityProductsInCart } = useCart();

  return (
    <TotalPriceContainer>
      <div>
        <span>quantidade</span>
        <span>
          {QuantityProductsInCart}{" "}
          {QuantityProductsInCart == 1 ? "item" : "itens"}
        </span>
      </div>
      <div>
        <strong>valor total</strong>
        <p>{formatedTotalPrice}</p>
      </div>
    </TotalPriceContainer>
  );
}
