import { ProductsProps } from '@/src/contexts/types'
import { CardProductContainer, ImageContainer } from './styles'
import Image from 'next/image'
import { useCart } from '@/src/contexts/useCart'

interface CardProductProps {
  product: ProductsProps
}

export function CardProduct({ product }: CardProductProps) {
  const { removeProductInCart } = useCart()

  function handleRemoveProductInCart(product: string) {
    removeProductInCart(product)
  }
  return (
    <CardProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={94} height={94} alt="" />
      </ImageContainer>
      <div>
        <strong>{product.name}</strong>
        <span>{product.price}</span>
        <p onClick={() => handleRemoveProductInCart(product.id)}>remover</p>
      </div>
    </CardProductContainer>
  )
}
