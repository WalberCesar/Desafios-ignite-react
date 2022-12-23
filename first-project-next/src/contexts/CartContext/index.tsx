import { createContext, useState } from "react";

import {
  CartContextProviderProps,
  CartContextType,
  ProductProps,
} from "./types";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProduct, setCartProduct] = useState<ProductProps[]>([]);

  function addProductInCart(product: any) {
    setCartProduct((state) => [...state, product]);
  }

  function handleRemoveProductInCart(productId: string) {
    const filter = cartProduct.filter((product) => product.id !== productId);
    setCartProduct(filter);
  }

  function checkAlreadyProductExistsInCart(id: string) {
    const response = cartProduct.some((product) => product.id === id);
    return response;
  }

  const totalPrice = cartProduct
    .map((item) => item.numberPrice)
    .reduce((acumulator, price) => acumulator! + price!, 0);
  const formatedTotalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice as number);

  const QuantityProductsInCart = cartProduct.length;
  return (
    <CartContext.Provider
      value={{
        formatedTotalPrice,
        addProductInCart,
        cartProduct,
        handleRemoveProductInCart,
        checkAlreadyProductExistsInCart,
        QuantityProductsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
