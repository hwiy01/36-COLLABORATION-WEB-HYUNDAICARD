import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

export const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  textAlign: "center",
  boxSizing: "border-box",
  ...themeVars.fontStyles.title_bold_13,
});

export const colorVariants = styleVariants({
  whiteGray: {
    backgroundColor: color.gray100,
    color: color.h_black,
    selectors: {
      "&:hover": {
        backgroundColor: color.gray200,
      },
    },
  },
  blackGray: {
    backgroundColor: color.h_black,
    color: color.h_white,
    selectors: {
      "&:hover": {
        backgroundColor: color.gray800,
      },
    },
  },
  whiteOutline: {
    backgroundColor: color.h_white,
    color: color.h_black,
    borderColor: color.h_black,
    border: "2px solid",
    selectors: {
      "&:hover": {
        borderColor: color.gray200,
      },
    },
  },
});

export const sizeVariants = styleVariants({
  small: {
    width: "7.3rem",
    height: "3.2rem",
    borderRadius: "0.8rem",
  },
  medium: {
    width: "10.9rem",
    height: "3.8rem",
    borderRadius: "0.4rem",
  },
  large: {
    width: "22.1rem",
    height: "4.5rem",
    borderRadius: "0.8rem",
  },
});
