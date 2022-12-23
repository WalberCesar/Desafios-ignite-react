import { useContext } from "react";
import { CartContext } from "./CartContext";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
