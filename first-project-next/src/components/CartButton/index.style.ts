import { styled } from "../../styles";

export const ButtonContainer = styled("button", {
  display: "flex",
  flexDirection: "row",
  padding: "0.75rem",
  alignItems: "center",
  justifyContent: "center",

  border: "none",
  borderRadius: "6px",

  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.5",
  },

  variants: {
    color: {
      gray: { backgroundColor: "$gray800", color: "$gray400" },
      green: {
        backgroundColor: "$green500",
        color: "$white",
        transition: "0.3s",
        "&:not(:disabled):hover": { backgroundColor: "$green300" },
      },
    },
    size: {
      medium: {
        width: "3rem",
        height: "3rem",
        svg: { fontSize: 24 },
      },
      large: {
        width: "3.5rem",
        height: "3.5rem",
        fontSize: 40,
      },
    },
  },
});
