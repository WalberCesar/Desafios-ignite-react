import { styled } from "../../styles";

export const FormAdreesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 40,
  gap: 32,

  width: "100%",
  minHeight: 372,

  borderRadius: 6,
  backgroundColor: "$base-card",

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    gap: 8,
    width: "100%",

    svg: {
      color: "$yellow-dark",
    },

    div: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 0,
      gap: 2,

      h1: {
        lineHeight: "130%",
        fontWeight: 400,
        fontSize: 16,
        fontStyle: "normal",

        color: "$base-subtitle",
      },

      strong: {
        lineHeight: "130%",
        fontWeight: 400,
        fontSize: 14,
        fontStyle: "normal",

        color: "$base-text",
      },
    },
  },
});

export const Input = styled("input", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  gap: 4,

  height: 42,
  width: 200,

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

  variants: {
    size: {
      Large: {
        width: "100%",
      },
      medium: {
        width: 276,
      },
      small: {
        width: 60,
      },
    },
  },
});

export const ContainerInput = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 0,
  gap: 16,

  height: 216,
  width: "100%",

  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
});
