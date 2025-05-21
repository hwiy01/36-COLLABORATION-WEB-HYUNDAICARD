import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

export const cardInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "45.7rem",
});

export const cardNameContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const rank = style({
  ...themeVars.fontStyles.title_bold_12,
  color: color.gray500,
});

export const name = style({
  ...themeVars.fontStyles.hyundai_title_30,
  color: color.h_black,
  lineHeight: "1.4",
  whiteSpace: "pre-line",
});

export const benefitList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

export const benefit = style({
  display: "flex",
  flexDirection: "column",
});

export const benefitDetail = style({
  whiteSpace: "pre-line",
  ...themeVars.fontStyles.subtitle_semibold_20,
  color: color.gray800,
});

export const btnContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

const buttonBase = {
  cursor: "pointer",
  border: "none",
  ...themeVars.fontStyles.title_bold_12,
};

export const annualfeeBtn = style({
  ...buttonBase,
  width: "26.5rem",
  height: "5.9rem",
  display: "flex",
  alignItems: "center",
  padding: "0 1.6rem",
  border: `1px solid ${color.gray200}`,
  borderRadius: "2.4rem",
  backgroundColor: color.h_white,
  color: color.h_black,
});

export const applyButton = style({
  ...buttonBase,
  width: "8.0rem",
  height: "3.6rem",
  borderRadius: "0.8rem",
  backgroundColor: color.h_black,
  color: color.h_white,
});
