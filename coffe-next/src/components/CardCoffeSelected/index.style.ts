import { styled } from "../../styles";

export const Divider = styled("div", {
  width: "100%",
  height: 0,
  border: "1px solid $base-button",
  marginBottom: 24,
});

export const ContainerCardCoffeSelected = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "8px 4px",
  marginBottom: 24,

  width: "100%",
  height: 80,
  backgroundColor: "$base-card",

  strong: {
    whiteSpace: "nowrap",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "130%",
    color: "$base-text",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: 0,
  gap: 20,

  width: "100%",
  backgroundColor: "$base-card",

  p: {
    fontSize: 16,
    lineHeight: "130%",
    color: "$base-subtitle",
  },
});

export const ContainerButton = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  gap: 8,
  width: "100%",
});

export const Button = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 8,
  gap: 4,

  minWidth: 72,
  height: 32,

  backgroundColor: "$base-button",
  borderRadius: 6,

  svg: {
    color: "$purple",
  },

  p: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "130%",
    textAlign: "center",
    color: "$base-title",
  },

  variants: {
    type: {
      remove: {
        cursor: "pointer",
        p: {
          fontSize: 12,
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "160%",
          textTransform: "uppercase",
          color: "$base-text",
        },
      },
    },
  },
});

export const ContainerMenuTypeAndButton = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 0,
  gap: 8,
});
