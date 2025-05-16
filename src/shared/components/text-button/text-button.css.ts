import { style } from "@vanilla-extract/css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const baseTextButtonContainer = style({
  display: "flex",
  minWidth: "8.6rem",
  gap: "0.4rem",
  alignItems: "center",
  background: "none",
  border: "none",
  ":hover": {
    cursor: "pointer",
  },
});

export const buttonText = style({
  ...fontStyles.caption_bold,
  fontSize: "1.1rem",
  letterSpacing: "0rem",
  lineHeight: "150%",
});
