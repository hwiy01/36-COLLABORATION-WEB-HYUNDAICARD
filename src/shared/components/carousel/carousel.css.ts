import { style, styleVariants } from "@vanilla-extract/css";

export const containerBase = style({
  position: "relative",
  overflow: "hidden",
  padding: "1rem 0",
});

export const containerSize = styleVariants({
  large: {
    width: "94.4rem",
    height: "37.5rem",
  }
});

export const slider = style({
  display: "flex",
  height: "100%",
});

export const slide = style({
  minWidth: "100%",
  height: "100%",
});

export const imageContainer = style({
  display: "flex",
  width: "100%",
  gap: "1.4rem",
});

const carouselImage = style({
  objectFit: "cover",
  borderRadius: "1.4rem",
  transition: "transform 150ms linear 50ms",
  selectors: {
    "&:hover": {
      transform: "translateY(-1rem)",
    },
  },
});

export const halfImage = style([
  {
    width: "50%",
  },
  carouselImage,
]);

export const quarterImage = style([
  {
    width: "25%",
  },
  carouselImage,
]);

export const leftArrow = style({
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  background: "none",
  border: "none",
  zIndex: 1,
});

export const rightArrow = style({
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  background: "none",
  border: "none",
  zIndex: 1,
});
