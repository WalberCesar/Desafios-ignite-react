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

  function checkAlreadyProductExistsInCart(productId: string) {
    const verify = cartProducts.findIndex((Product) => Product.id === productId)

    if (verify === -1) {
      return false
    } else {
      return true
    }
  }
  return (
    <cartProductContext.Provider
      value={{
        cartProducts,
        addProductInCart,
        removeProductInCart,
        checkAlreadyProductExistsInCart,
      }}
    >
      {children}
    </cartProductContext.Provider>
  )
}
