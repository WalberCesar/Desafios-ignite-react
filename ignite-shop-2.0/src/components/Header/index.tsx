import Image from 'next/image'
import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

import CartMenu from '../CartMenu'

import { useRouter } from 'next/router'

export default function Header() {
  const { pathname } = useRouter()
  const showbuttonCartMenu = pathname !== '/success'
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      {showbuttonCartMenu && <CartMenu />}
    </HeaderContainer>
  )
}
