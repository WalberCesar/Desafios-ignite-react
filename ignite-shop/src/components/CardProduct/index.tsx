import Image from "next/image";
import { CardProductContainer, ImageContainer } from "./index.style";
import camiseta from "../../assets/camisetas/1.png";
import { ProductProps } from "../../contexts/CartContext/types";
import { useCart } from "../../contexts/CartContext/useContext";

interface Props {
  product: ProductProps;
}

export function CardProduct({ product }: Props) {
  const { handleRemoveProductInCart } = useCart();
  return (
    <CardProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={101.94} height={93} alt="" />
      </ImageContainer>
      <div>
        <strong>{product.name}</strong>
        <span>{product.price}</span>
        <p onClick={() => handleRemoveProductInCart(product.id)}>remover</p>
      </div>
    </CardProductContainer>
  );
}
