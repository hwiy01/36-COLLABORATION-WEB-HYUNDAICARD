import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

export const selectedContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  width: "57.2rem",
});

export const labelRow = style({
  display: "flex",
  alignItems: "baseline",
  gap: "0.8rem",
});

export const label = style({
  ...themeVars.fontStyles.title_bold_14,
  color: color.h_white,
});

export const limitGray = style({
  ...themeVars.fontStyles.body2_regular_11,
  color: color.gray600,
});

export const limitRed = style({
  ...themeVars.fontStyles.body2_regular_11,
  color: color.h_secondary_red,
});

export const tagGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
});
