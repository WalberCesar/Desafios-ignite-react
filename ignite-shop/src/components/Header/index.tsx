import { HeaderContainer } from "./index.style";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import Link from "next/link";
import CartMenu from "../CartMenu";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();
  const showCartMenu = pathname != "/succes";
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logo.src} alt="" width={129.74} height={52} />
      </Link>
      {showCartMenu && <CartMenu />}
    </HeaderContainer>
  );
}
