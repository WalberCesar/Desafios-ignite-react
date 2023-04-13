import Image from 'next/image'
import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

import CartMenu from '../CartMenu'

import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
  const { pathname } = useRouter()
  const showbuttonCartMenu = pathname !== '/success'
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="" />
      </Link>
      {showbuttonCartMenu && <CartMenu />}
    </HeaderContainer>
  )
}
