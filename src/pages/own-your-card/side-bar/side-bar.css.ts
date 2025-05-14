import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";

export const sideBarContainer = style({
  width: "26.6rem",
  borderRight: `1px solid ${color.gray300}`,
});

export const sideBarHeader = style({
  padding: "0 4rem 0 4rem",
  height: "8rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
