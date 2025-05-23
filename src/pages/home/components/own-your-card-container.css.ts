import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";

export const container = style({
  width: "94.4rem",
  height: "31rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  boxSizing: "border-box",
  padding: "3.2rem 4.8rem 0rem 3.2rem",
  backgroundColor: color.h_black,
  borderRadius: "1.4em",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
});
export const right = style({
  height: "100%",
  overflow: "hidden",
});

export const dropdownContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.8rem",
  position: "relative",
  zIndex: 1,
});

export const tagContainer = style({
  position: "relative",
});
