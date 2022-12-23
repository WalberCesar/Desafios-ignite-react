import { styled } from "../../styles";

export const ContainerCompleteOrderMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 40,

  width: 448,

  minHeight: 498,

  borderRadius: "6px 44px",

  backgroundColor: "$base-card",

  footer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    marginTop: "auto",
  },

  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 8px",
    gap: 4,

    backgroundColor: "$yellow-dark",
    borderRadius: 6,
    border: "none",

    cursor: "pointer",

    fontWeight: 700,
    fontSize: 14,
    lineHeight: "160%",
    color: "$white",
    fontStretch: 100,
    textTransform: "uppercase",

    transition: "0.3s",

    "&:not(:disabled):hover": {
      backgroundColor: "$yellow",
    },

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
});

export const ContainerTotalPrice = styled("div", {
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
  padding: 0,
  gap: 12,
  alignItems: "flex-start",
  width: "100%",

  ":last-child": {
    p: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "130%",
      color: "$base-subtitle",
    },
  },

  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,

    width: "100%",

    p: {
      fontSize: 14,
      lineHeight: "130%",
      color: "$base-text",
    },
  },
});
