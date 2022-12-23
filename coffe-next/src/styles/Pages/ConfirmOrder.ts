import { styled } from "..";

export const ConfirmOrderConatiner = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "0 10rem",
  gap: 32,
  width: "100%",
});

export const ContainerAdreesAndPayament = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 0,
  gap: 12,
  marginBottom: 459,
  backgroundColor: "$background",
});
export const ContainerCompleteOrderMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 0,
  gap: 12,

  width: "100%",
});

export const TitleText = styled("h1", {
  fontFamily: "Baloo 2",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 18,
  lineHeight: "130%",

  color: "$base-subtitle",
});

export const PayamentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 40,
  gap: 32,

  minWidth: 640,
  minHeight: 207,

  borderRadius: 6,
  backgroundColor: "$base-card",
});

export const HeaderPayamentContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: 0,
  gap: 8,
  width: "100%",

  svg: {
    color: "$purple",
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
});
export const MethodPayamentContainer = styled("footer", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  gap: 12,

  width: "100%",

  svg: {
    color: "$purple",
  },
});

export const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
  gap: 12,

  width: "178.67px",
  height: 51,

  backgroundColor: "$base-button",

  border: "1px solid transparent",
  borderRadius: 6,

  cursor: "pointer",

  p: {
    fontSize: 12,
    lineHeight: "160%",
    textTransform: "uppercase",
  },
  variants: {
    border: {
      select: {
        border: "1px solid $purple",
      },
    },
  },
});
