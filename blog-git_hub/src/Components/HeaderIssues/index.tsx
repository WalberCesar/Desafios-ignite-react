import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUpRightFromSquare,
  faComment,
  faCalendar,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { IPost } from "../../pages/Home";
import { dateFormatter } from "../../utils/formatter";
import { Spinner } from "../Loading";
import { Container } from "./index.style";
type Props = {
  postDetails: IPost;
  isLoading: boolean;
};
export function HeaderIssues({ isLoading, postDetails }: Props) {
  const theme = useTheme();
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <div onClick={goBack}>
              <FontAwesomeIcon
                color={theme.blue}
                width="0.75rem"
                height="0.75rem"
                icon={faChevronLeft}
              />
              <p>VOLTAR</p>
            </div>
            <div>
              <p>
                <a href={postDetails.html_url} target="_blank">
                  VER NO GITHUB
                </a>
              </p>
              <FontAwesomeIcon
                color={theme.blue}
                width="0.703125rem"
                height="0.703125rem"
                icon={faUpRightFromSquare}
              />
            </div>
          </header>
          <strong>{postDetails.title}</strong>
          <footer>
            <div>
              <FontAwesomeIcon color={theme["base-label"]} icon={faGithub} />
              <p>{postDetails?.user?.login}</p>
            </div>
            <div>
              <FontAwesomeIcon color={theme["base-label"]} icon={faCalendar} />
              <p>{dateFormatter(postDetails.created_at)} </p>
            </div>
            <div>
              <FontAwesomeIcon color={theme["base-label"]} icon={faComment} />
              <p>{postDetails.comments} comentários</p>
            </div>
          </footer>
        </>
      )}
    </Container>
  );
}
