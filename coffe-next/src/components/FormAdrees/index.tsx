import { MapPin } from "phosphor-react";
import { UseFormRegister } from "react-hook-form";
import { FormProps } from "../../contexts/types";
import Input from "../Input";

import { FormAdreesContainer, Container, InputWrapper } from "./index.style";

type FormAdreesProps = {
  register: UseFormRegister<FormProps>;
  error: {
    [key: string]: {
      message: string;
    };
  };
};
export default function FormAdrees({ register, error }: FormAdreesProps) {
  return (
    <FormAdreesContainer>
      <header>
        <MapPin weight="regular" />
        <div>
          <h1>Endereço de entrega</h1>
          <strong>informe o endereço onde deseja receber seu pedido</strong>
        </div>
      </header>

      <Container>
        <Input
          error={error.cep?.message}
          register={register}
          nameInput="cep"
          placeholder="Cep"
          sizeInput={"default"}
        />

        <Input
          error={error.rua?.message}
          register={register}
          nameInput="rua"
          placeholder="Rua"
          sizeInput={"Large"}
        />

        <InputWrapper>
          <Input
            error={error.numero?.message}
            placeholder="Número"
            register={register}
            nameInput="numero"
            sizeInput={"default"}
          />

          <Input
            error={error.complemento?.message}
            placeholder="Complemento"
            register={register}
            nameInput="complemento"
            sizeInput={"Large"}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            error={error.bairro?.message}
            placeholder="Bairro"
            register={register}
            nameInput="bairro"
          />

          <Input
            error={error.cidade?.message}
            placeholder="Cidade"
            sizeInput={"medium"}
            register={register}
            nameInput="cidade"
          />

          <Input
            error={error.uf?.message}
            placeholder="UF"
            sizeInput={"small"}
            register={register}
            nameInput="uf"
          />
        </InputWrapper>
      </Container>
    </FormAdreesContainer>
  );
}
