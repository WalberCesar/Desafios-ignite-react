import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartMenuContainer, IconX, Title } from './styles'
import { CardProduct } from '../CardProduct'

import axios from 'axios'
import { useState } from 'react'

import Button from '../Button'
import CartButton from '../CartButton'
import TotalPrice from '../TotalPrice'
import { useCart } from '@/src/contexts/useCart'

export default function CartMenu() {
  const { cartProducts } = useCart()
  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)
  async function handleBuyProduct() {
    try {
      setIsCreateCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        cartProducts,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreateCheckoutSession(false)
      alert('Falha ao direcionar ao checkout')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button colors={'grayButton'} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartMenuContainer>
          <CartClose>
            <IconX weight="bold" />
          </CartClose>
          <div>
            <Title>Sacola de compras</Title>

            {cartProducts.map((product) => {
              return <CardProduct key={product.id} product={product} />
            })}

            <TotalPrice />
            <CartButton
              disabled={isCreateCheckoutSession || cartProducts.length === 0}
              onClick={() => handleBuyProduct()}
              text="Finalizar compra"
            />
          </div>
        </CartMenuContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
