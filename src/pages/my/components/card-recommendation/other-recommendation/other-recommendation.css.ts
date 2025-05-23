import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "5.6rem",
  padding: "4rem 5rem 16rem 5rem",
});

export const titleContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const title = style({
  ...themeVars.fontStyles.hyundai_head_40,
});

export const subTitle = style({
  ...themeVars.fontStyles.title_bold_18,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
});
