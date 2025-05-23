import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const container = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "4.8rem",
  alignItems: "center",
  padding: "0 2.4rem 0 4rem",
  justifyContent: "space-between",
  borderBottom: `1px solid ${themeVars.color.gray100}`,
});

export const breadcrumb = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.4rem",
});

export const breadcrumbText = style({
  ...themeVars.fontStyles.body2_regular_14,
  color: themeVars.color.h_black,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const loginButtonContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.6rem",
});

export const baseButton = style({
  borderRadius: "0.8rem",
  ...themeVars.fontStyles.body2_regular_14,
  padding: "0.6rem 1.7rem",
});

export const buttonVariants = styleVariants({
  signup: {
    color: themeVars.color.h_black,
    backgroundColor: themeVars.color.gray100,
  },
  login: {
    color: themeVars.color.h_white,
    backgroundColor: themeVars.color.h_black,
  },
});
