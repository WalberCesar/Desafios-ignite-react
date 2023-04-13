import { Handbag } from 'phosphor-react'
import { BuyButtonContainer } from './styles'
import { ComponentProps } from 'react'
import { Counter } from '../Counter'

type BuyButtonProps = ComponentProps<typeof BuyButtonContainer> & {
  showCounter?: boolean
}
export default function Button({
  showCounter = false,
  ...rest
}: BuyButtonProps) {
  return (
    <BuyButtonContainer {...rest}>
      {showCounter && <Counter />}
      <Handbag weight="bold" />
    </BuyButtonContainer>
  )
}
