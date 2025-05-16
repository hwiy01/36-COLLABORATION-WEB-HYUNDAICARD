import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/styles";

export const footerRoot = style({
  width: "100%",
  height: "25rem",
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

export const contactInfoGroup = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.7rem",
  alignSelf: "stretch",
});

export const contactInfoRow = style({
  display: "flex",
  alignItems: "center",
  gap: "5rem",
});

export const contactTextStyle = recipe({
  base: {
    color: themeVars.color.h_black,
  },
  variants: {
    variant: {
      label: {
        ...themeVars.fontStyles.title_bold_12,
      },
      value: {
        ...themeVars.fontStyles.body1_medium_12,
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
