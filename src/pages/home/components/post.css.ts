import { style } from "@vanilla-extract/css";

export const postContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "2rem",
  rowGap: "4rem",
});
