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
  top: "0",
  left: "0",
  borderRadius: "0.8rem",
});

export const handle = style({
  height: "3.2rem",
  backgroundColor: "black",
  width: "1.2rem",
  borderRadius: "0.1rem",
  borderLeft: "0.4rem",
  borderRight: "0.4rem",
  borderColor: "white",
  borderStyle: "solid",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%) translateX(-50%)", // 중앙 정렬
});

export const labelSection = style({
  display: "flex",
  position: "relative",
  width: "18.4rem",
  top: "1.2rem",
});

export const labelStyle = style({
  position: "absolute",
  transform: "translateX(-50%)", // 핸들과 동일한 중앙 정렬
  margin: "0",
  textAlign: "center",
});
