import { useContext } from 'react'
import { cartProductContext } from './CartProductsContext'

export function useCart() {
  const context = useContext(cartProductContext)
  return context
}
