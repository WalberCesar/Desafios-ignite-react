import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderIssues } from "../../Components/HeaderIssues";
import { PostContent } from "../../Components/PostContent";
import { api } from "../../lib/axios";
import { IPost } from "../Home";
import { Container } from "./index.style";

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Issues() {
  const [postDetails, setPostDetails] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  async function getPostDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/repos/${userName}/${repoName}/issues/${id}`
      );
      setPostDetails(response.data);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPostDetails();
  }, []);
  return (
    <Container>
      <HeaderIssues postDetails={postDetails} isLoading={isLoading} />
      {!isLoading && <PostContent content={postDetails.body} />}
    </Container>
  );
}
