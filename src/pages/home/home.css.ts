import { style } from "@vanilla-extract/css";

export const homeContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingBottom: "5rem",
});

export const carouselContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "4rem",
  gap: "0.8rem",
})

export const eventCardContainer = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "0rem 5rem",
});

export const oneYourCardContainer = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "4.8rem 0rem 0rem 0rem",
});
