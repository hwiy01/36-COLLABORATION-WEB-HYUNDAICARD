import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/styles";

export const subContentContainer = style({
  position: "absolute",
  display: "flex",
  padding: "0rem 0rem 0rem 27rem",
  width: "100%",
  height: "37.5rem",
  background: themeVars.color.h_white,
  boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.10)`,
  zIndex: 5,
});

export const contentList = style({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  width: "14.5rem",
  padding: "2rem 1.7rem",
  gap: "0.9rem",
});

export const listTitle = style({
  ...themeVars.fontStyles.body1_medium_10,
  cursor: "pointer",
});

export const listItems = style({
  ...themeVars.fontStyles.title_bold_12,
  color: themeVars.color.h_black,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.6rem",
  cursor: "pointer",
});

export const lineContainer = style({
  display: "flex",
  alignItems: "center",
  width: "0.1rem",
  height: "100%",
  marginLeft: "62%",
});

export const loginContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "2rem",
});

export const loginContent = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.9rem",
  },
  variants: {
    gap: {
      title: {
        ...themeVars.fontStyles.body1_medium_10,
        color: themeVars.color.gray600,
        gap: "0.9rem",
      },
      content: {
        gap: "1.5rem",
      },
    },
  },
});

export const loginDescription = style({
  ...themeVars.fontStyles.body2_regular_11,
  width: "100%",
  maxWidth: "12.3rem",
  whiteSpace: "collapse",
  color: themeVars.color.h_black,
});

export const loginButton = style({
  width: "100%",
  marginTop: "1.5rem",
});
