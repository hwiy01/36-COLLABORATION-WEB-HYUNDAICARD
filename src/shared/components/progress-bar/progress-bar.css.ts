// styles/progress-bar.css.ts
import { style } from "@vanilla-extract/css";
import { color } from "../../../styles/tokens/color.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "9.5rem",
  height: "0.8rem",
});

export const dotContainer = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "0.6rem",
});

export const circle = style({
  width: "0.6rem",
  height: "0.6rem",
  borderRadius: "50%",
  backgroundColor: color.gray300,
  transition: "background-color 300ms ease",
});

export const active = style({
  backgroundColor: color.h_black,
});

export const iconButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
});
