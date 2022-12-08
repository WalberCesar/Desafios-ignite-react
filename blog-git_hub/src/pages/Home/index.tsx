import { Post } from "../../Components/Post";
import { PostsListContainer } from "../../Components/PostsListContainer";
import { ProfileCard } from "../../Components/ProfileCard";
import { SearchInput } from "../../Components/SearchInput";
import { Container } from "./index.style";

export function Home() {
  return (
    <Container>
      <ProfileCard />
      <SearchInput />
      <PostsListContainer />
    </Container>
  );
}
