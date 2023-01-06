import { styled } from "../../styles";

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 20,

  width: 256,
  minHeight: 310,

  backgroundColor: "$base-card",
  borderRadius: "6px 36px",

  img: {
    // position: "relative",
    marginTop: "-50px",
  },

  h1: {
    display: "flex",
    alignItems: "flex-end",
    textAlign: "center",
    marginTop: "1rem",

    fontFamily: "Baloo 2",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "130%",

    color: "$base-subtitle",
    textTransform: "uppercase",
  },

  span: {
    fontSize: 14,
    lineHeight: "130%",
    textAlign: "center",
    color: "$base-label",
    marginTop: 8,
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",

    width: "100%",

    div: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,

      div: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        gap: 4,

        width: 72,
        height: 38,

        backgroundColor: "$base-button",
        borderRadius: 6,

        svg: {
          color: "$purple",
          "&:hover": {
            color: "$purple-dark",
          },
        },

        p: {
          lineHeight: "130%",
          textAlign: "center",
          color: "$base-title",
        },
      },

      button: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        gap: 8,

        width: 38,
        height: 38,
        backgroundColor: "$purple-dark",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",

        "&:disabled": {
          cursor: "not-allowed",
          opacity: 0.7,
        },

        "&:not(:disabled):hover": {
          backgroundColor: "$purple",
          transition: "0.3s",
        },

        svg: {
          color: "#fff",
          width: 22,
          height: 22,
        },
      },
    },
  },
});

export const Flavor = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 8px",
  marginTop: 12,

  width: 81,
  height: 21,
  backgroundColor: "$yellow-light",
  borderRadius: 100,

  span: {
    fontWeight: 700,
    fontSize: 10,
    lineHeight: "130%",
    color: "$yellow-dark",
    textTransform: "uppercase",
  },
});
