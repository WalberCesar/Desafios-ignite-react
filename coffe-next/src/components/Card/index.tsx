import { CardContainer, Flavor } from "./index.style";
import imgCard from "../../assets/coffes/Coffee.png";
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ProductProps } from "../../contexts/types";
import { useCart } from "../../contexts/useCartContext";
import { it } from "node:test";
import { useState } from "react";
import Link from "next/link";
interface CardProps {
  coffe: ProductProps;
}
export default function Card({ coffe }: CardProps) {
  const { addCoffeInCart, cartList, setCartList } = useCart();

  const coffeAlreadyExistsInCart = cartList.findIndex(
    (item) => item.id === coffe.id
  );

  const [quantity, setQuantity] = useState(1);

  function handleAddCoffeInCart(product: ProductProps, quantity: number) {
    addCoffeInCart(product, quantity);
  }
  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffe.price * quantity);
  return (
    <CardContainer>
      <Image width={120} height={120} src={coffe.imageUrl} alt="" />
      <Flavor>
        <span>{coffe.type}</span>
      </Flavor>
      <h1>{coffe.name}</h1>
      <span>{coffe.description}</span>
      <footer>
        <strong>{formatedPrice}</strong>
        <div>
          <div>
            {quantity >= 2 && coffeAlreadyExistsInCart < 0 ? (
              <Minus cursor="pointer" onClick={handleDecrease} />
            ) : (
              <Minus cursor="not-allowed" />
            )}
            <p>{quantity}</p>
            {coffeAlreadyExistsInCart < 0 ? (
              <Plus cursor="pointer" onClick={handleIncrease} />
            ) : (
              <Plus cursor="not-allowed" />
            )}
          </div>

          <button
            disabled={coffeAlreadyExistsInCart >= 0}
            onClick={() => handleAddCoffeInCart(coffe, quantity)}
          >
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </CardContainer>
  );
}
