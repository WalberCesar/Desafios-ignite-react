import { useEffect, useState } from "react";
import { Post } from "../../Components/Post";
import { PostsListContainer } from "../../Components/PostsListContainer";
import { ProfileCard } from "../../Components/ProfileCard";
import { SearchInput } from "../../Components/SearchInput";
import { api } from "../../lib/axios";
import { Container } from "./index.style";

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export type IPost = {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: string;
  user: {
    login: string;
  };
};
export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPosts(query: string = "") {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${userName}/${repoName}`
      );
      setPosts(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Container>
      <ProfileCard />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      <PostsListContainer isLoading={isLoading} posts={posts} />
    </Container>
  );
}
