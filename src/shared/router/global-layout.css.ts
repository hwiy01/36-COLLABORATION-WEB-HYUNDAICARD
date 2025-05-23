import { style } from "@vanilla-extract/css";

export const globalLayoutContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const mainContent = style({
  flex: 1,
});
