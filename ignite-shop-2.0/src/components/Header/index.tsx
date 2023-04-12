import Image from 'next/image'
import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

import CartMenu from '../CartMenu'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <CartMenu />
    </HeaderContainer>
  )
}
