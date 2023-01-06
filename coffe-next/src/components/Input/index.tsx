/* eslint-disable react/display-name */
import { ComponentProps, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormProps } from "../../contexts/types";
import { useCart } from "../../contexts/useCartContext";
import { ContainerInput, InputStyle } from "./index.style";
type InputProps = ComponentProps<typeof InputStyle> &
  ComponentProps<typeof ContainerInput> & {
    error: string;
    register: UseFormRegister<FormProps>;
    nameInput:
      | "cep"
      | "rua"
      | "numero"
      | "complemento"
      | "bairro"
      | "cidade"
      | "uf"
      | "pagamento";
  };

export default function Input({
  error,
  register,
  nameInput,
  ...rest
}: InputProps) {
  const { quantityItemsInCart } = useCart();
  return (
    <ContainerInput {...rest}>
      <InputStyle
        disabled={quantityItemsInCart <= 0}
        {...register(`${nameInput}`, {
          required: ` ${nameInput} é obrigatório`,
        })}
        {...rest}
      />
      {error && <p>{error}</p>}
    </ContainerInput>
  );
}
