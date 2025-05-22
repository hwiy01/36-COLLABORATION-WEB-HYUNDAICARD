import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const bubbleContainer = style({
  marginTop: "1.3rem",
  position: "relative",
  display: "inline-block",
});

export const bubbleBody = style({
  width: "14rem",
  height: "4.2rem",
  backgroundColor: color.gray900,
  borderRadius: "0.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...fontStyles.body2_regular_11,
  color: color.gray200,
});

export const bubbleTail = style({
  position: "absolute",
  left: "1.2rem",
  top: "-0.9rem",
  width: "1.2rem",
  height: "0.9rem",
  backgroundColor: color.gray900,
  clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
});
