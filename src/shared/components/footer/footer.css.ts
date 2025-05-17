import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/styles";

export const footerRoot = style({
  width: "100%",
  height: "100%",
  maxHeight: "30rem",
  display: "inline-flex",
  padding: "0rem 17.2rem 4.2rem 5rem",
  alignItems: "flex-start",
  gap: "17.6rem",
});

export const footerSectionList = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "7.5rem",
});

export const footerSection = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.4rem",
});

export const contactInfoGroup = recipe({
  base: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  variants: {
    gap: {
      sm: {
        gap: "0.7rem",
      },
      md: {
        gap: "1.4rem",
      },
      lg: {
        gap: "3.8rem",
      },
    },
  },
});

export const supportNoticeText = style({
  ...themeVars.fontStyles.body1_medium_12,
  width: "100%",
  maxWidth: "19.3rem",
  color: themeVars.color.gray800,
});

export const linkListContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "14rem",
  gap: "0.8rem",
});

export const legalListContainer = style({
  display: "flex",
  width: "100%",
  height: "100%",
  maxWidth: "24.5rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "3.8rem",
});

export const legalCategoryContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1.7rem",
});

export const legalImageContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1.5rem",
});
