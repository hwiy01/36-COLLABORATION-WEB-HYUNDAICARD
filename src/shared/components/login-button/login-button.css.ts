import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box",
    border: "none",
    cursor: "pointer",
    borderRadius: "0.8rem",

    ...themeVars.fontStyles.title_bold_13,
  },

  variants: {
    color: {
      whiteGray: {
        backgroundColor: color.gray100,
        color: color.gray900,
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
        border: "2px solid",
        borderColor: color.h_black,
        selectors: {
          "&:hover": {
            borderColor: color.gray300,
          },
        },
      },
    },

    size: {
      small: {
        width: "9.7rem",
        height: "3.2rem",
      },
      medium: {
        width: "10.9rem",
        height: "3.8rem",
        borderRadius: "0.4rem",
      },
      large: {
        width: "22.1rem",
        height: "4.5rem",
      },
    },
  },

  defaultVariants: {
    color: "blackGray",
    size: "medium",
  },
});
