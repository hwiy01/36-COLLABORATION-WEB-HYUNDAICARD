import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const corporateContent = style({
  ...themeVars.fontStyles.body2_regular_11,
  color: themeVars.color.h_black,
});
