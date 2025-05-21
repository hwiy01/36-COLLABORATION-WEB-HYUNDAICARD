import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "6rem",
  padding: "4rem 2rem",
});

export const brandSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const brandHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const brandTitle = style({
  fontSize: "2.4rem",
  fontWeight: "bold",
});

export const brandDescription = style({
  fontSize: "1.4rem",
  color: "#666",
});

export const viewAllButton = style({
  alignSelf: "flex-start",
  background: "none",
  border: "none",
  color: "#000",
  fontSize: "1.3rem",
  cursor: "pointer",
  padding: 0,
});

export const cardList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.6rem",
});
