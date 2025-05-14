import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem 2.1rem 1.5rem 3.9rem",
  gap: "15rem",
  width: "100%",
  height: "5rem",
});

export const headerLeftContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "4rem",
});

export const headerRightContainer = style({
  ...themeVars.fontStyles.hyundai_body2_14,
  color: themeVars.color.gray800,
  display: "flex",
  alignItems: "center",
  gap: "1.9rem",
});

export const leftItemContainer = style({
  ...themeVars.fontStyles.hyundai_body2_14,
  color: themeVars.color.h_black,
  display: "flex",
  gap: "0.8rem",
  width: "100%",
  height: "100%",
});
