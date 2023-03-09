import { ReactNode } from "react";

export type CartContextType = {
  addProductInCart(product: any): void;
  cartProduct: ProductProps[];
  handleRemoveProductInCart(productId: string): void;
  checkAlreadyProductExistsInCart(id: string): boolean;
  QuantityProductsInCart: number;

  formatedTotalPrice: string;
};
export type CartContextProviderProps = {
  children: ReactNode;
};
export type ProductProps = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
  numberPrice?: number;
};
