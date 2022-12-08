import { Post } from "../Post";
import { Container } from "./index.style";

export function PostsListContainer() {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}
