import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  color: color.h_white,
});

export const row = style({
  display: "flex",
  alignItems: "baseline",
  gap: "2.4rem",
});

export const title = style({
  ...themeVars.fontStyles.hyundai_title_30,
  color: color.h_white,
});

export const subtitle = style({
  color: color.gray100,
  ...themeVars.fontStyles.hyundai_body1_18,
});

export const description = style({
  color: color.gray100,
  ...themeVars.fontStyles.body1_medium_14,
});
