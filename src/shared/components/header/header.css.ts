import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem 5rem 0rem 5rem",
  gap: "15rem",
  width: "100%",
  height: "8rem",
  boxShadow: "0rem 0.2rem 0.4rem 0rem rgba(0,0,0,0.10)",
});

export const headerLeftContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  gap: "4rem",
  cursor: "pointer",
});

export const headerRightContainer = style({
  ...themeVars.fontStyles.hyundai_body2_14,
  color: themeVars.color.gray800,
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  cursor: "pointer",
});

export const leftItemContainer = style({
  ...themeVars.fontStyles.hyundai_body2_14,
  color: themeVars.color.h_black,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  width: "100%",
  height: "100%",
  cursor: "pointer",
});

export const mainItems = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      borderBottom: `1px solid ${themeVars.color.h_black}`,
    },
  },
});
