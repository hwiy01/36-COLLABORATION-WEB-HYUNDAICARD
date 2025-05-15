import { style, styleVariants } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

const sizeWidths = {
  small: "7.5rem", // 75px
  medium: "12.2rem", // 122px
  large: "14.8rem", // 148px
  dropdown: "10.8rem", // 108px (기존 값 유지)
};

const clipPathValue =
  "polygon(92.243% 0%, 11.748% 0%, 11.748% 0%, 11.362% 0.027%, 10.979% 0.107%, 10.6% 0.241%, 10.227% 0.426%, 9.86% 0.662%, 9.501% 0.948%, 9.15% 1.284%, 8.81% 1.668%, 8.481% 2.1%, 8.163% 2.58%, 2.421% 11.863%, 2.421% 11.863%, 1.983% 12.643%, 1.584% 13.501%, 1.226% 14.43%, 0.911% 15.423%, 0.639% 16.473%, 0.413% 17.573%, 0.235% 18.716%, 0.106% 19.894%, 0.027% 21.101%, 0% 22.33%, 0% 83.148%, 0% 83.148%, 0.102% 85.881%, 0.395% 88.474%, 0.866% 90.892%, 1.497% 93.1%, 2.272% 95.064%, 3.176% 96.748%, 4.192% 98.119%, 5.305% 99.141%, 6.499% 99.779%, 7.757% 100%, 88.605% 100%, 88.605% 100%, 88.996% 99.972%, 89.383% 99.89%, 89.765% 99.754%, 90.142% 99.566%, 90.512% 99.325%, 90.874% 99.033%, 91.228% 98.691%, 91.571% 98.299%, 91.902% 97.858%, 92.222% 97.37%, 97.611% 88.541%, 97.611% 88.541%, 98.043% 87.76%, 98.437% 86.904%, 98.79% 85.977%, 99.102% 84.988%, 99.37% 83.943%, 99.592% 82.849%, 99.768% 81.714%, 99.896% 80.543%, 99.974% 79.344%, 100% 78.124%, 100% 16.852%, 100% 16.852%, 99.898% 14.119%, 99.605% 11.526%, 99.134% 9.108%, 98.503% 6.9%, 97.728% 4.936%, 96.824% 3.252%, 95.808% 1.881%, 94.695% 0.859%, 93.501% 0.221%, 92.243% 0%)";

const baseCssProps = {
  clipPath: clipPathValue,
  minHeight: "3.4rem",
  borderRadius: "6px",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  border: "none",
};

export const frameSizes = styleVariants({
  small: {
    ...baseCssProps,
    width: sizeWidths.small,
  },
  medium: {
    ...baseCssProps,
    width: sizeWidths.medium,
  },
  large: {
    ...baseCssProps,
    width: sizeWidths.large,
  },
});

export const otherModeStyle = styleVariants({
  input: {
    ...baseCssProps,
    padding: "0 8px 0 0",
    display: "flex",
    justifyContent: "flex-end",
    gap: "4px",
    alignItems: "center",
    ...fontStyles.body4_regular,
    fontSize: "1.3rem",
    letterSpacing: "-1.8%",
    color: color.h_primary_blue,
  },
  filter: {
    ...baseCssProps,
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...fontStyles.body2_medium,
    color: color.gray800,
  },
  selected: {
    ...baseCssProps,
    padding: "0",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...fontStyles.body2_medium,
  },
});

export const baseFrame = style({
  ...baseCssProps,
  width: sizeWidths.dropdown,
  padding: "1px",
});

export const innerFrame = style({
  clipPath: clipPathValue,
  width: "100%",
  height: "100%",
  background: "black",
  display: "flex",
  gap: "3px",
  justifyContent: "flex-end",
  paddingRight: "8px",
  color: "white",
  alignItems: "center",
  ...fontStyles.body4_regular,
  fontSize: "1.5rem",
});

export const closeButton = style({
  border: "none",
  background: "none",
});
