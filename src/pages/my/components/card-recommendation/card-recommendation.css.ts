import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "6.5rem",
  padding: "0 5.0rem",
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "5.6rem",
});
