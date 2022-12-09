import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  img {
    width: 100%;
  }

  ul {
    padding-left: 1.5rem;
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
  }
  pre {
    background: ${({ theme }) => theme["base-post"]};
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`;
