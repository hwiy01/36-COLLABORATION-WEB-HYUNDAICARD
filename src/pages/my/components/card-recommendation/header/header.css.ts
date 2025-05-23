import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  width: "44.6rem",
  marginTop: "6.2rem",
});

export const subTitle = style({
  ...themeVars.fontStyles.title_bold_18,
  color: themeVars.color.gray800,
});

export const highlight = style({
  color: themeVars.color.h_primary_blue,
  ...themeVars.fontStyles.head_extrabold_20,
});

export const mainTitle = style({
  ...themeVars.fontStyles.hyundai_head_40,
  color: themeVars.color.h_black,
});
