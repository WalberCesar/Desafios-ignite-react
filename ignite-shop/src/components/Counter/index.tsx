import { useCart } from "../../contexts/CartContext/useContext";
import { CounterProductsInCart } from "./index.style";

export function Counter() {
  const { QuantityProductsInCart } = useCart();

  return (
    <>
      {QuantityProductsInCart > 0 && (
        <CounterProductsInCart>{QuantityProductsInCart}</CounterProductsInCart>
      )}
    </>
  );
}
