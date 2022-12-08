import { Container } from "./index.style";

export function Post() {
  return (
    <Container to="/Issues/1">
      <div>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </div>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </Container>
  );
}
