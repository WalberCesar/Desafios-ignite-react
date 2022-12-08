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
import { Container } from "./index.style";

export function HeaderIssues() {
  const theme = useTheme();
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <Container>
      <header>
        <div onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>VOLTAR</p>
        </div>
        <div>
          <p>VER NO GITHUB</p>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </div>
      </header>
      <strong>JavaScript data types and data structures</strong>
      <footer>
        <div>
          <FontAwesomeIcon color={theme["base-label"]} icon={faGithub} />
          <p>WalberCesar</p>
        </div>
        <div>
          <FontAwesomeIcon color={theme["base-label"]} icon={faCalendar} />
          <p>há 1 dia </p>
        </div>
        <div>
          <FontAwesomeIcon color={theme["base-label"]} icon={faComment} />
          <p>5 comentários</p>
        </div>
      </footer>
    </Container>
  );
}
