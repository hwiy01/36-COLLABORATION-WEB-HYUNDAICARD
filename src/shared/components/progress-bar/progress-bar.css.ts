import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { color } from "../../../styles/tokens/color.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "9.5rem",
  height: "0.8rem",
  gap: "1.2rem",
});

export const dotContainer = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "0.6rem",
});

export const dot = recipe({
  base: {
    all: "unset",
    width: "0.6rem",
    height: "0.6rem",
    borderRadius: "50%",
    backgroundColor: color.gray300,
    transition: "background-color 300ms ease",
    cursor: "pointer",
  },
  variants: {
    active: {
      true: {
        backgroundColor: color.h_black,
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const iconButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
});
