import type { AppProps } from "next/app";
import Header from "../components/header";
import { CartContextProvider } from "../contexts/CartContext";

import { globalStyle } from "../styles/Global";

globalStyle();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
