import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";

export const rangeSlideContainer = style({
  width: "100%",
  height: "5rem",
  padding: "0 4.1rem 0 4.1rem",
});

export const baseSlider = style({
  width: "18.4rem",
  height: "1.2rem",
  backgroundColor: color.gray300,
  borderRadius: "8px",
  position: "relative",
});

export const selectedTrack = style({
  backgroundColor: "black",
  position: "absolute",
  height: "1.2rem",
});

export const handle = style({
  height: "3.2rem",
  backgroundColor: "black",
  width: "1.2rem",
  borderRadius: "1px",
  border: "4px solid white",
});

export const labelSection = style({
  display: "flex",
});
