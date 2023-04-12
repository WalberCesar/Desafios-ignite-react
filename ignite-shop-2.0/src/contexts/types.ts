import { ReactNode } from 'react'
export interface ProductsProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

export interface CartProductsContextProviderProps {
  children: ReactNode
}

export interface CartProductsContent {
  cartProducts: ProductsProps[]
  addProductInCart(product: ProductsProps): void
  removeProductInCart(productId: string): void
}
