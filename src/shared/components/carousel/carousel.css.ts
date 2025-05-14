import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  width: "100%",
});

export const halfImage = style({
  width: "50%",
  objectFit: "cover",
});

export const quarterImage = style({
  width: "25%",
  objectFit: "cover",
});
