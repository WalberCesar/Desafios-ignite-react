import { useCart } from '@/src/contexts/useCart'
import { TotalPriceContainer } from './styles'

export default function TotalPrice() {
  const { cartProducts } = useCart()

  const quantityItemsInCart = cartProducts.length
  const totalPrice = cartProducts.reduce((acc, product) => {
    const price = Number(product.price.replace('R$', '').replace(',', '.'))
    const totalPrice = acc + price

    return totalPrice
  }, 0)

  const totalPriceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)

  console.log('totalPrice => ', totalPrice)
  return (
    <TotalPriceContainer>
      <div>
        <span>quantidade</span>
        <span>
          {quantityItemsInCart <= 1
            ? `${quantityItemsInCart} item`
            : `${quantityItemsInCart} itens`}
        </span>
      </div>
      <div>
        <strong>valor total</strong>
        <p>{totalPriceFormat}</p>
      </div>
    </TotalPriceContainer>
  )
}
