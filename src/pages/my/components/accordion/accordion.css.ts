import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const accordionContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  boxSizing: "border-box",
  paddingBottom: "1.6rem",
});

export const accordionHeader = style({
  width: "100%",
  height: "5.6rem",
  display: "flex",
  padding: "0rem 3rem 0rem 4.1rem",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: `1px solid ${color.gray100}`,
  boxSizing: "border-box",
});

export const headerTitle = style({
  ...fontStyles.title_bold_14,
  fontWeight: "400",
});

export const tagsContainer = style({
  boxSizing: "border-box",
  padding: "0rem 4rem 0rem 4rem",
  display: "flex",
  gap: "8px",
  whiteSpace: "nowrap",
});
