import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 25.125rem;
  height: 16.25rem;
  text-decoration: none;

  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme["base-post"]};

  transition: 0.4s;

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    span {
      width: max-content;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;

      color: ${(props) => props.theme["base-span"]};
    }

    strong {
      flex: 1;
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;
