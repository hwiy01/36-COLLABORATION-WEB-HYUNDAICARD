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
});

export const imageContainer = style({
  width: "100%",
  height: "22.1rem",
  paddingTop: "1rem",
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
});

export const text = style([
  fontStyles.head3_extrabold,
  {
    color: color.h_black,
  },
]);
