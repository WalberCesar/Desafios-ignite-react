import { styled } from "..";

export const ContainerSuccess = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  gap: 102,
  paddingTop: 102,
  paddingBottom: 447,
  paddingLeft: 160,
  paddingRight: 160,
});
export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: 0,

  h1: {
    marginBottom: 4,
    fontFamily: "Baloo 2",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 32,
    lineHeught: "130%",
    color: "$yellow-dark",
  },

  strong: {
    marginBottom: 40,

    fontSize: 20,
    lineHeight: "130%",
    color: "$base-subtitle",
    fontStretch: 100,
    fontWeight: 400,
  },
});
export const BuyInformations = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  //   justifyContent: "center",
  padding: 40,
  gap: 32,
  width: 526,
  height: 270,
  border: "1px solid black",
  borderRadius: "6px 36px",
});

export const Itens = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  gap: 12,
});

export const ContainerIcon = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
  gap: 8,

  width: 32,
  height: 32,
  borderRadius: 1000,

  svg: {
    color: "$white",
  },

  variants: {
    color: {
      purple: {
        backgroundColor: "$purple",
      },
      yellow: {
        backgroundColor: "$yellow",
      },
      orange: {
        backgroundColor: "$yellow-dark",
      },
    },
  },
});

export const ContainerText = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 0,
  gap: 4,
});
