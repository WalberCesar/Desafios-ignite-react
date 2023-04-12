import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartMenuContainer, IconX, Title } from './styles'
import { CardProduct } from '../CardProduct'

import Button from '../Button'
import CartButton from '../CartButton'
import TotalPrice from '../TotalPrice'

export default function CartMenu() {
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
            <CardProduct />
            <CardProduct />
            <CardProduct />

            <TotalPrice />
            <CartButton text="Finalizar compra" />
          </div>
        </CartMenuContainer>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
