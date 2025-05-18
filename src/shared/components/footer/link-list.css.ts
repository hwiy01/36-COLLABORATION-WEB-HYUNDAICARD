import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/styles";

export const linkContent = recipe({
  base: {
    color: themeVars.color.h_black,
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
