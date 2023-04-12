import { createContext, useState } from 'react'
import {
  CartProductsContent,
  CartProductsContextProviderProps,
  ProductsProps,
} from './types'

export const cartProductContext = createContext({} as CartProductsContent)

export default function CartProductContextProvider({
  children,
}: CartProductsContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductsProps[]>([])

  function addProductInCart(product: ProductsProps) {
    setCartProducts((state) => [...state, product])
  }

  function removeProductInCart(productId: string) {
    const filterCartProducts = cartProducts.filter((product) => {
      return product.id !== productId
    })

    setCartProducts(filterCartProducts)
  }
  return (
    <cartProductContext.Provider
      value={{ cartProducts, addProductInCart, removeProductInCart }}
    >
      {children}
    </cartProductContext.Provider>
  )
}
