import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { recipe } from "@vanilla-extract/recipes";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "94.4rem",
});

export const brandSection = recipe({
  base: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  variants: {
    size: {
      default: {
        padding: "4.8rem 5.2rem 4.8rem 1.5rem",
      },
      wide: {
        padding: "4.8rem 6.8rem 4.8rem 1.5rem",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const cardList = recipe({
  base: {
    display: "grid",
    rowGap: "2.4rem",
  },
  variants: {
    columns: {
      default: {
        gridTemplateColumns: "repeat(4, 1fr)",
        columnGap: "4.5rem",
      },
      wide: {
        gridTemplateColumns: "repeat(3, 1fr)",
        columnGap: "7.5rem",
      },
    },
  },
  defaultVariants: {
    columns: "default",
  },
});

export const brandHeader = style({
  display: "flex",
  flexDirection: "column",
  width: "15.7rem",
  height: "15.7rem",
});

export const brandTitle = style({
  ...themeVars.fontStyles.hyundai_title_30,
});

export const brandDescription = style({
  ...themeVars.fontStyles.body2_regular_11,
});
