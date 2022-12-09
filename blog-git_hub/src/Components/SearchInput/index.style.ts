import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7.0625rem;
  margin-bottom: 3rem;
  gap: 0.75rem;
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.875rem 1rem;
    gap: 8px;

    width: 100%;
    height: 3.125rem;

    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};

    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;

    ::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;

      color: ${(props) => props.theme["base-label"]};
    }

    transition: 0.4s;
    &:focus {
      border-color: ${(props) => props.theme["blue"]};
      outline: none;
    }
  }
`;
export const HeaderSearchInput = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;
  }

  p {
    color: ${(props) => props.theme["base-span"]};
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;
  }
`;
