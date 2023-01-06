import { styled } from "../../styles";

export const FormAdreesContainer = styled("form", {
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

    ">div": {
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

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 0,
  gap: 16,

  height: 216,
  width: "100%",
});

export const InputWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  width: "100%",
});
