import { useCart } from '@/src/contexts/useCart'
import { CounterProductsInCart } from './styles'

export function Counter() {
  const { cartProducts } = useCart()

  const quantityProductsInCart = cartProducts.length

  return (
    <>
      {quantityProductsInCart > 0 && (
        <CounterProductsInCart>{quantityProductsInCart}</CounterProductsInCart>
      )}
    </>
  )
}
