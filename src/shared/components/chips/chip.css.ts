import { style, styleVariants } from "@vanilla-extract/css";

// const baseFrame = style({
//   clipPath:
//     "polygon(7px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 7px) 100%, 0 100%, 0 5px)",
//   borderRadius: "6px",
// });

const baseChipContainer = style({
  height: "34px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const cardSize = styleVariants({
  small: [baseChipContainer, { width: "75px" }],
  medium: [baseChipContainer, { width: "122px" }],
  large: [baseChipContainer, { width: "148px" }],
  dropdown: [baseChipContainer, { width: "108px" }],
});

export const closeButton = style({
  justifyItems: "flex-end",
  right: "8px",
});

export const svgSize = style({
  width: "75px",
  height: "34px",
});
