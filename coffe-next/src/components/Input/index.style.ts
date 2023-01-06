import { styled } from "../../styles";

export const ContainerInput = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "0.3rem",

  p: {
    color: "#f81f1f",
    fontWeight: 500,
    fontSize: "0.75rem",
    position: "relative",
    marginBottom: -16,
    whiteSpace: "nowrap",
  },
  variants: {
    sizeInput: {
      Large: {
        width: "100%",
      },
      medium: {
        width: 276,
      },
      small: {
        width: 60,
      },
      default: {
        width: 200,
      },
    },
  },
});

export const InputStyle = styled("input", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  gap: 4,

  height: 42,
  width: "100%",

  backgroundColor: "$base-input",
  border: "1px solid $base-button",
  borderRadius: 4,

  "&::placeholder": {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "130%",

    color: "$base-text",
  },

  "&:focus": {
    border: "1px solid $yellow-dark",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },
});
