import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
    }

    body, input, button {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
    }

    input {
        background: ${(props) => props.theme["base-input"]};
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme["base-button"]};
    }
`;
