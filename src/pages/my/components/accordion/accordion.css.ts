import { keyframes, style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const accordionContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  boxSizing: "border-box",
  alignItems: "center",
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
  width: "100%",
  boxSizing: "border-box",
  padding: "0rem 4rem 0rem 4rem",
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  paddingBottom: "1.6rem",
  overflow: "hidden",
});

const openAccordion = keyframes({
  "0%": {
    maxHeight: "0",
    opacity: 0,
    overflow: "hidden",
  },
  "30%": {
    opacity: 0.3,
    overflow: "hidden",
  },
  "60%": {
    opacity: 0.6,
    overflow: "hidden",
  },
  "100%": {
    maxHeight: "100vh",
    opacity: 1,
  },
});

const closeAccordion = keyframes({
  "0%": {
    maxHeight: "100vh",
    overflow: "hidden",
  },
  "50%": {
    overflow: "hidden",
  },
  "100%": {
    opacity: 0,
    maxHeight: "0",
  },
});

export const tagsContainerOpen = style({
  animation: `${openAccordion} 0.4s ease-out forwards`,
});

export const tagsContainerClosed = style({
  animation: `${closeAccordion} 0.4s ease-out forwards`,
});
