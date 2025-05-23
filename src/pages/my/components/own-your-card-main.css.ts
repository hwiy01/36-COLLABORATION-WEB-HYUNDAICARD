import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const mainContinaer = style({
  display: "flex",
  flexDirection: "column",
});
export const recommendContainer = style({});

export const recommendStyle = style({});

export const otherRecommendContainer = style({
  padding: "4rem 5rem 0rem 4rem",
});

export const otherRecommendedCardsTitle = style({
  ...fontStyles.hyundai_head_40,
});
export const otherRecommendedCardsP = style({
  ...fontStyles.title_bold_18,
  fontWeight: "400",
  color: color.gray800,
  marginBottom: "5.6rem",
});
