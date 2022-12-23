import { styled } from "..";

export const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "2rem",
});

export const BannerHome = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",

  padding: "4rem 10rem",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  h1: {
    fontFamily: "Baloo 2",
    fontWeight: 800,
    fontSize: "3rem",
    lineHeight: "130%",
    marginBottom: "1rem",
    color: "$base-title",
  },

  h3: {
    fontWeight: 400,
    lineHeight: "130%",
    fontSize: "1.25rem",
    color: "$base-subtitle",
  },
});

export const ContainerContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",
  gap: "1.25rem",

  //   ":first-child": {
  //     marginBottom: "1.25rem",
  //   },
});

export const ContentIcon = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "2.5rem",
});

export const Icon = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.75rem",
});

export const ContainerIcon = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
  gap: 8,

  width: "2rem",
  height: "2rem",
  borderRadius: 1000,

  svg: {
    color: "White",
    weight: "fill",
  },

  variants: {
    color: {
      orange: {
        backgroundColor: "$yellow-dark",
      },
      yellow: {
        backgroundColor: "$yellow",
      },
      purple: {
        backgroundColor: "$purple",
      },
      gray: {
        backgroundColor: "$base-text",
      },
    },
  },
});

export const Title = styled("h1", {
  fontFamily: "Ballo 2",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "2rem",
  lineHeight: "130%",

  color: "$base-subtitle",
  marginLeft: "10rem",
  marginTop: "2rem",
  marginBottom: "3.325rem",
});

export const CoffeList = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  columnGap: 32,
  rowGap: 40,
  padding: "0px 10rem",

  width: "100%",
  marginBottom: 157,
});
