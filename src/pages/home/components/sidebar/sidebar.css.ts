import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const container = style({
  width: "100%",
  height: "100%",
  maxWidth: "32rem",
  padding: "5rem",
  display: "flex",
  flexDirection: "column",
  gap: "4.2rem",
  border: `1px solid ${themeVars.color.gray100}`,
});

export const sidebarSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.3rem",
});

export const loginContainer = style({
  display: "flex",
  flexDirection: "column",
  padding: "3.1rem",
  gap: "1.6rem",
  justifyContent: "center",
});

export const inputDotContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.6rem",
  justifyContent: "center",
  alignItems: "center",
});

export const inputDot = style({
  borderRadius: "50%",
  width: "1.5rem",
  height: "1.5rem",
  backgroundColor: themeVars.color.gray200,
});

export const loginText = style({
  ...fontStyles.body2_regular_11,
  textAlign: "center",
});

export const loginButtonContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.3rem",
});

export const loginButtonBase = style({
  ...themeVars.fontStyles.title_bold_13,
  padding: "1.2rem 3.9rem",
  borderRadius: "0.8rem",
  whiteSpace: "nowrap",
  cursor: "pointer",
  backgroundColor: "transparent",
});

export const loginButtonVariants = styleVariants({
  black: {
    border: `solid 0.2rem ${themeVars.color.h_black}`,
    color: themeVars.color.h_black,
  },
  gray: {
    border: `solid 0.1rem ${themeVars.color.gray300}`,
    color: themeVars.color.gray700,
  },
});

export const submitContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.9rem",
});

export const submitButton = style({
  backgroundColor: themeVars.color.h_black,
  padding: "1.7rem 9.4rem",
  borderRadius: "0.8rem",
  color: themeVars.color.h_white,
  ...themeVars.fontStyles.title_bold_13,
});

export const titleContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  ...themeVars.fontStyles.title_bold_16,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const rightArrowIcon = style({});

export const subTitle = style({
  ...themeVars.fontStyles.title_bold_13,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const otherLinkContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "flex-end",
});

export const otherLinkText = style({
  ...themeVars.fontStyles.body2_regular_11,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const otherLinkIcon = style({
  width: "1.2rem",
  height: "1.2rem",
});

export const baseButton = style({
  borderRadius: "0.8rem",
  border: `0.1rem solid ${themeVars.color.h_black}`,
  cursor: "pointer",
});

export const buttonRowContainer = style({
  width: "100%",
  height: "6.2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const rowListItem = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: "0.4rem",
  borderRight: `1px solid ${themeVars.color.gray100}`,
  justifyContent: "center",
  selectors: {
    "&:last-child": {
      borderRight: "none",
    },
  },
});

export const rowListIcon = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const rowListText = style({
  ...themeVars.fontStyles.body2_regular_11,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const buttonColumnContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const columnListItem = style({
  borderBottom: `1px solid ${themeVars.color.gray200}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.4rem",
  padding: "1.6rem",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export const columnListTitle = style({
  ...themeVars.fontStyles.title_bold_13,
});

export const columnListDescription = style({
  ...themeVars.fontStyles.body2_regular_11,
});

export const newsList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
});

export const newsItem = style({
  ...themeVars.fontStyles.body1_medium_13,
});

export const defaultMessage = style({
  ...themeVars.fontStyles.body2_regular_11,
  alignSelf: "flex-start",
});
