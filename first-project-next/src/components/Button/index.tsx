import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./index.style";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}
export default function Button({ text, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
}
