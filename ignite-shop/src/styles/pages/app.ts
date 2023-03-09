import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const IconContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "0.75rem",
  alignItems: "center",
  justifyContent: "center",

  width: "3rem",
  height: "3rem",

  borderRadius: "6px",
  backgroundColor: "$gray800",

  cursor: "pointer",
});
