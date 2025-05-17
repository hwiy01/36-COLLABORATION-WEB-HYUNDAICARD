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
  justifyContent: "center",
  gap: "0.8rem",
  marginTop: "1.2rem",
});

export const circle = style({
  width: "0.8rem",
  height: "0.8rem",
  borderRadius: "50%",
  backgroundColor: color.gray300,
  transition: "background-color 300ms ease",
});

export const active = style({
  backgroundColor: color.h_black,
});
