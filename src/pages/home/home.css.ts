import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const homeContainer = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minHeight: "100vh",
  boxSizing: "border-box",
});

export const mainContent = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  paddingBottom: "5rem",
});

export const sidebarFixed = style({
  top: "8.1rem",
  right: 0,
  zIndex: 1,
});

export const carouselContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "4rem",
  gap: "0.8rem",
});

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
