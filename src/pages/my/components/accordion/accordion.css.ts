import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const accordionHeader = style({
  width: "100%",
  display: "flex",
  padding: "0rem 3rem 0rem 4.1rem",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: `1px solid ${color.gray100}`,
});

export const headerTitle = style({
  ...fontStyles.title_bold_14,
  fontWeight: "400",
});
