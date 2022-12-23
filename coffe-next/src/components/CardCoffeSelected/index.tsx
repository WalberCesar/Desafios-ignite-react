import Image from "next/image";
import {
  Button,
  ContainerButton,
  ContainerCardCoffeSelected,
  ContainerMenuTypeAndButton,
  Content,
  Divider,
} from "./index.style";
import imgCoffe from "../../assets/coffes/Coffee.png";
import { Minus, Plus, Trash } from "phosphor-react";
import { ProductProps } from "../../contexts/types";
import { useCart } from "../../contexts/useCartContext";

interface Props {
  coffe: ProductProps;
}

export default function CardCoffeSelected({ coffe }: Props) {
  const { cartList, setCartList } = useCart();
  // console.log("cartList =>", cartList);
  console.log("price =>", coffe.price);

  function handleIncrease() {
    const incrementQuantity = cartList.map((item) => {
      if (item.id === coffe.id) {
        return {
          id: item.id,
          imageUrl: item.imageUrl,
          name: item.name,
          price: item.price,
          quantity: coffe.quantity! + 1,
          description: item.description,
          type: item.type,
        };
      } else {
        return item;
      }
    });

    setCartList(incrementQuantity as ProductProps[]);
  }

  function handleDecrease() {
    console.log("cartList =>", cartList);
    const decrementQuantity = cartList.map((item) => {
      if (item.id === coffe.id) {
        return {
          id: item.id,
          imageUrl: item.imageUrl,
          name: item.name,
          price: item.price,
          quantity: item.quantity! - 1,
          description: item.description,
          type: item.type,
        };
      } else {
        return item;
      }
    });

    setCartList(decrementQuantity as ProductProps[]);
  }

  function handleRemoveItemsOfCart() {
    const filterCart = cartList.filter((item) => item.id !== coffe.id);

    setCartList(filterCart);
  }

  const formatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffe.price * coffe.quantity!);
  return (
    <>
      <ContainerCardCoffeSelected>
        <Content>
          <Image src={coffe.imageUrl} width={64} height={64} alt="" />
          <ContainerMenuTypeAndButton>
            <p>{coffe.name}</p>
            <ContainerButton>
              <Button>
                {coffe.quantity! >= 2 ? (
                  <Minus
                    cursor="pointer"
                    onClick={handleDecrease}
                    weight="bold"
                  />
                ) : (
                  <Minus cursor="not-allowed" weight="bold" />
                )}

                <p>{coffe.quantity}</p>
                {coffe.quantity! >= 1 && (
                  <Plus
                    cursor="pointer"
                    onClick={handleIncrease}
                    weight="bold"
                  />
                )}
              </Button>
              <Button onClick={handleRemoveItemsOfCart} type={"remove"}>
                <Trash weight="regular" />
                <p>remover</p>
              </Button>
            </ContainerButton>
          </ContainerMenuTypeAndButton>
        </Content>

        <strong>{formatedPrice}</strong>
      </ContainerCardCoffeSelected>
      <Divider />
    </>
  );
}
