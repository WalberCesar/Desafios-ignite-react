import axios from "axios";
import { useCart } from "../../contexts/CartContext/useContext";
import Button from "../Button";
import { CardProduct } from "../CardProduct";
import TotalPrice from "../TotalPrice";
import { CartClose, CartMenuContainer, IconX, Title } from "./index.style";
import * as Dialog from "@radix-ui/react-dialog";
import { CartButton } from "../CartButton";

export default function CartMenu() {
  const { cartProduct, QuantityProductsInCart } = useCart();
  async function handleBuyProduct() {
    try {
      const response = await axios.post("/api/checkout", {
        products: cartProduct,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      alert("Falha ao redirecionar ao checkout!");
    }
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton showCounter={true} color={"gray"} size={"medium"} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartMenuContainer>
          <CartClose>
            <IconX weight="bold" />
          </CartClose>
          <div>
            <Title>Sacola de compras</Title>
            {cartProduct.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
            {QuantityProductsInCart <= 0 && (
              <h3>Sua sacola de compras esta vazia!</h3>
            )}
          </div>
          <div>
            <TotalPrice />
            <Button
              disabled={QuantityProductsInCart == 0}
              onClick={handleBuyProduct}
              text="Finalizar compra"
            />
          </div>
        </CartMenuContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
