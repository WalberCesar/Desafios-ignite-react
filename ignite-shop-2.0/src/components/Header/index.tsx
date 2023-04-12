import Image from 'next/image'
import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

import BuyButton from '../Button'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <BuyButton colors={'grayButton'} />
    </HeaderContainer>
  )
}
