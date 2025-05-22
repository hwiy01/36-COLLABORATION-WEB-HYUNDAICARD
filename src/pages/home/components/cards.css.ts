import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "94.4rem",
});

export const brandSection = styleVariants({
  default: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4.8rem 5.2rem 4.8rem 1.5rem",
  },
  wide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "4.8rem 6.8rem 4.8rem 1.5rem",
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

export const cardList = styleVariants({
  default: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: "4.5rem",
    rowGap: "2.4rem",
  },
  wide: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "7.5rem",
    rowGap: "2.4rem",
  },
});
