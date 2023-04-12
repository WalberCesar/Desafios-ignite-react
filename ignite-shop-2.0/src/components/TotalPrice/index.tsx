import { TotalPriceContainer } from './styles'

export default function TotalPrice() {
  return (
    <TotalPriceContainer>
      <div>
        <span>quantidade</span>
        <span>3 items</span>
      </div>
      <div>
        <strong>valor total</strong>
        <p>R$270,00</p>
      </div>
    </TotalPriceContainer>
  )
}
