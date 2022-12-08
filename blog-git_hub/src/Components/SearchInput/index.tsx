import { Container, HeaderSearchInput } from "./index.style";

export function SearchInput() {
  return (
    <Container>
      <HeaderSearchInput>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </HeaderSearchInput>
      <input placeholder="Buscar Conteúdo" />
    </Container>
  );
}
