import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'
import CartProductContextProvider from '../contexts/CartProductsContext'
import Header from '../components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProductContextProvider>
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CartProductContextProvider>
  )
}
