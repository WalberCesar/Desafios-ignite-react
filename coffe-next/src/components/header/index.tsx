import { MapPin, ShoppingCart } from "phosphor-react";
import {
  Counter,
  HeaderContainer,
  RightHeaderMenu,
  ShoppingCartButton,
} from "./index.style";

import logoImg from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../contexts/useCartContext";
import { ComponentProps } from "@stitches/react";

type Props = ComponentProps<typeof ShoppingCart> & {};

export default function Header({ ...rest }: Props) {
  const { cartList, quantityItemsInCart } = useCart();
  return (
    <HeaderContainer>
      <Image alt="" src={logoImg} style={{ cursor: "pointer" }} />
      <RightHeaderMenu>
        <div>
          <MapPin weight="fill" size={22} />
          <p>Mauá,SP</p>
        </div>

        {quantityItemsInCart <= 0 ? (
          <ShoppingCartButton disabled>
            <ShoppingCart aria-disabled weight="fill" size={22} {...rest} />
          </ShoppingCartButton>
        ) : (
          <Link href={"/ConfirmOrder"}>
            <ShoppingCartButton>
              <Counter>
                <p>{quantityItemsInCart}</p>
              </Counter>
              <ShoppingCart aria-disabled weight="fill" size={22} {...rest} />
            </ShoppingCartButton>
          </Link>
        )}
      </RightHeaderMenu>
    </HeaderContainer>
  );
}
