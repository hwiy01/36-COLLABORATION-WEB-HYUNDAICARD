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
  overflow: "hidden",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "2.4rem",
});
