import { IPost } from "../../pages/Home";
import { Spinner } from "../Loading";
import { Post } from "../Post";
import { Container, ContainerSpiner } from "./index.style";
type Props = {
  posts: IPost[];
  isLoading: boolean;
};
export function PostsListContainer({ posts, isLoading }: Props) {
  return (
    <>
      {isLoading ? (
        <ContainerSpiner>
          <Spinner />
        </ContainerSpiner>
      ) : (
        <Container>
          {posts.map((item) => (
            <Post key={item.number} item={item} />
          ))}
        </Container>
      )}
    </>
  );
}
