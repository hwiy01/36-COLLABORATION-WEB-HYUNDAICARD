import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/styles";

export const legalContent = recipe({
  base: {
    color: themeVars.color.h_black,
    whiteSpace: "pre-line",
  },
  variants: {
    fontstyle: {
      bold: {
        ...themeVars.fontStyles.title_bold_12,
      },
      medium: {
        ...themeVars.fontStyles.body1_medium_12,
      },
    },
  },
});
