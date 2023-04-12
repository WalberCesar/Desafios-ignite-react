import { createContext } from 'react'
import { CartProductsContent, CartProductsContextProviderProps } from './types'

export const cartProductContext = createContext({} as CartProductsContent)

export default function CartProductContextProvider({
  children,
}: CartProductsContextProviderProps) {
  return (
    <cartProductContext.Provider value={{}}>
      {children}
    </cartProductContext.Provider>
  )
}
