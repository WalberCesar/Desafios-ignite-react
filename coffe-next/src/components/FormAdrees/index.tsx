import { MapPin } from "phosphor-react";
import { UseFormRegister } from "react-hook-form";
import { FormProps } from "../../contexts/types";
import { FormAdreesContainer, Input, ContainerInput } from "./index.style";

type FormAdreesProps = {
  register: UseFormRegister<FormProps>;
};
export default function FormAdrees({ register }: FormAdreesProps) {
  return (
    <FormAdreesContainer>
      <header>
        <MapPin weight="regular" />
        <div>
          <h1>Endereço de entrega</h1>
          <strong>informe o endereço onde deseja receber seu pedido</strong>
        </div>
      </header>

      <ContainerInput>
        <Input placeholder="Telefone" {...register("cep")} />
        <Input placeholder="Rua" size={"Large"} {...register("rua")} />
        <div>
          <Input placeholder="Número" {...register("numero")} />
          <Input
            placeholder="Complemento"
            size={"Large"}
            {...register("complemento")}
          />
        </div>
        <div>
          <Input placeholder="Bairro" {...register("bairro")} />
          <Input placeholder="Cidade" size={"medium"} {...register("cidade")} />
          <Input placeholder="UF" size={"small"} {...register("uf")} />
        </div>
      </ContainerInput>
    </FormAdreesContainer>
  );
}
