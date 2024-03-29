import { createContext, useState } from "react";
import {
  CartContentProps,
  CartContextProviderProps,
  ProductProps,
} from "./types";

export const CartContext = createContext({} as CartContentProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, setCartList] = useState<ProductProps[]>(
    [] as ProductProps[]
  );

  function addCoffeInCart(coffe: ProductProps, quantity: number) {
    const coffeAlreadyExistInCart = cartList.findIndex(
      (item) => item.id === coffe.id
    );

    if (coffeAlreadyExistInCart < 0) {
      setCartList((state) => [
        ...state,
        {
          description: coffe.description,
          id: coffe.id,
          imageUrl: coffe.imageUrl,
          name: coffe.name,
          price: coffe.price * coffe.quantity,
          type: coffe.type,
          quantity: quantity,
          defaultPriceId: coffe.defaultPriceId,
          formatedPrice: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(coffe.price * coffe.quantity),
        },
      ]);
    } else {
      setCartList((state) => [...state]);
    }
  }

  const quantityItemsInCart = cartList.length;

  return (
    <CartContext.Provider
      value={{ addCoffeInCart, cartList, setCartList, quantityItemsInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
