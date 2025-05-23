import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const sideBarContainer = style({
  width: "26.6rem",
  borderRight: `1px solid ${color.gray300}`,
  overflowY: "auto",
  overflowX: "hidden",
});

export const sideBarHeader = style({
  padding: "0 4rem 0 4rem",
  height: "8rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const sideBarHeaderTitle = style({
  ...fontStyles.subtitle_semibold_16,
  fontWeight: "400",
});

export const resetBtnStyle = style({
  border: "none",
  background: "none",
  display: "flex",
});

export const resetBtnText = style({
  ...fontStyles.body1_medium_12,
  letterSpacing: "-1.2%",
  fontWeight: "400",
});

export const annualFeeContainer = style({
  height: "11.8rem",
  width: "100%",
  borderTop: `1px solid ${color.gray100}`,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "5rem",
});

export const annualFeeHeader = style({
  width: "100%",
  height: "5.6rem",
  padding: "0 4.1rem 0 4.1rem",
  display: "flex",
  alignItems: "center",
});

export const annualFeeTitle = style({
  ...fontStyles.title_bold_14,
  fontWeight: "400",
});
