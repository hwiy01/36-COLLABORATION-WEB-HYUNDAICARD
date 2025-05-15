import { style } from "@vanilla-extract/css";
import { fontStyles } from "src/styles/tokens/font-styles.css";
import { color } from "src/styles/tokens/color.css";

export const container = style({
  width: "22.1rem",
  height: "28rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  boxSizing: "border-box",
  gap: "1.3rem",
});

export const imageContainer = style({
  width: "100%",
  height: "22.1rem",
  paddingTop: "1rem",
  transition: "padding 150ms linear",
  selectors: {
    "&:hover": {
      paddingTop: "0rem",
    },
  },
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0 0 0 0.3rem",
});

export const text = style([
  fontStyles.head_extrabold_12,
  {
    color: color.h_black,
  },
]);
