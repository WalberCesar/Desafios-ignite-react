import { Handbag } from 'phosphor-react'
import { BuyButtonContainer } from './styles'
import { ComponentProps } from 'react'

type BuyButtonProps = ComponentProps<typeof BuyButtonContainer>
export default function Button({ ...rest }: BuyButtonProps) {
  return (
    <BuyButtonContainer {...rest}>
      <Handbag weight="bold" />
    </BuyButtonContainer>
  )
}
