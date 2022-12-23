import { MapPin } from "phosphor-react";
import { FormAdreesContainer, Input, ContainerInput } from "./index.style";

export default function FormAdrees() {
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
        <Input placeholder="Telefone" />
        <Input placeholder="Rua" size={"Large"} />
        <div>
          <Input placeholder="Número" />
          <Input placeholder="Complemento" size={"Large"} />
        </div>
        <div>
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" size={"medium"} />
          <Input placeholder="UF" size={"small"} />
        </div>
      </ContainerInput>
    </FormAdreesContainer>
  );
}
