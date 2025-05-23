import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";

export const pageConatiner = style({
  width: "100vw",
  display: "flex",
  borderTop: `1px solid ${color.gray100}`,
});
