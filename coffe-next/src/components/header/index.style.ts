import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem 10rem",

  width: "100%",

  backgroundColor: "$background",

  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 5,
});
export const RightHeaderMenu = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  gap: "0.8rem",

  "> div": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    gap: "0.25rem",

    width: "143px",
    height: 38,
    backgroundColor: "$purple-light",
    borderRadius: 6,

    svg: {
      color: "$purple-dark",
    },
  },
});

export const ShoppingCartButton = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  borderRadius: 6,
  border: "none",

  width: "2.375rem",
  height: "2.375rem",

  backgroundColor: "$yellow-light",

  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },

  ":not(:disabled):hover": {},

  svg: {
    color: "$yellow-dark",

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

export const Counter = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "2px 4px",

  marginLeft: "2.25rem",
  marginBottom: "2.25rem",

  minWidth: 20,
  minHeight: 20,

  backgroundColor: "$yellow-dark",

  borderRadius: 1000,
  border: "none",

  position: "absolute",

  p: {
    fontWeight: 700,
    fontSize: 12,
    textAlign: "center",

    color: "$white",
  },
});
