import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  width: 100%;
  height: 10.5rem;
  background-color: ${(props) => props.theme["base-profile"]};

  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: 0px;
      gap: 0.5rem;

      cursor: pointer;

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 160%;
        color: ${({ theme }) => theme.blue};

        text-transform: uppercase;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.blue};
        }
      }
    }
  }
  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      line-height: 0px;
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        color: ${(props) => props.theme["base-span"]};
      }
    }
  }
`;
