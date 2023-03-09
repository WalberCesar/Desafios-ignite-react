import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 486,
});

export const SliderContainer = styled("div", {
  display: "flex",
  gap: "3rem",
  margin: "0 auto",
  ".embla__slide": {
    minWidth: "32rem",
  },
});

export const Product = styled("div", {
  width: "100%",
  minHeight: 496,

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",
    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignitems: "flex-start",
      padding: "0px",
      gap: "4px",

      strong: {
        fontSize: "$lg",
        color: "$gray100",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const IconContainer = styled("button", {
  display: "flex",
  flexDirection: "row",
  padding: "0.75rem",
  alignItems: "center",
  justifyContent: "center",

  width: "3.5rem",
  height: "3.5rem",

  borderRadius: "6px",
  backgroundColor: "$green500",
  border: "none",

  cursor: "pointer",

  transition: "0.3s",

  "&:not(:disabled):hover": {
    backgroundColor: "$green300",
  },
  "&:disabled": {
    opacity: "0.5",
    cursor: "not-allowed",
  },
});
