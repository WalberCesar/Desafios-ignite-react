import { Dispatch, ReactNode, SetStateAction } from "react";

export type FormProps = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  pagamento?: string;
};

export type CartContentProps = {
  addCoffeInCart(coffe: ProductProps, quantity: number): void;
  cartList: ProductProps[];
  setCartList: Dispatch<SetStateAction<ProductProps[]>>;
  quantityItemsInCart: number;
};
export type CartContextProviderProps = {
  children: ReactNode;
};

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  imageUrl: string;
  quantity: number;
  defaultPriceId?: string;
  formatedPrice?: string;
  addres?: FormProps;
}
