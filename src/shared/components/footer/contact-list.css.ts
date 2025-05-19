import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/styles";

export const contactInfoRow = recipe({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  variants: {
    gap: {
      sm: {
        gap: "2.8rem",
      },
      md: {
        gap: "5rem",
      },
      lg: {
        gap: "7rem",
      },
    },
  },
});

export const contactTextStyle = recipe({
  base: {
    color: themeVars.color.h_black,
  },
  variants: {
    variant: {
      label: {
        ...themeVars.fontStyles.title_bold_12,
      },
      value: {
        ...themeVars.fontStyles.body1_medium_12,
      },
    },
  },
});
