import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 2rem;

  width: 100%;
  min-height: 13.25rem;
  background-color: ${(props) => props.theme["base-profile"]};

  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderProfile = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme["base-title"]};
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;
      color: ${({ theme }) => theme.blue};

      text-transform: uppercase;
    }
  }
`;
export const DescriptionProfile = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme["base-text"]};
`;
export const FooterProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  margin-top: auto;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;
