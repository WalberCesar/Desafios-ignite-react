import { globalCss } from ".";

export const globalStyle = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  ":focus": {
    outline: 0,
  },

  body: {
    backgroundColor: "$background",
    color: "$base-text",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "1rem",
  },
  input: {
    backgroundColor: "$base-input",
    borderRadius: 4,
    border: "1px solid $base-button",
  },
});
