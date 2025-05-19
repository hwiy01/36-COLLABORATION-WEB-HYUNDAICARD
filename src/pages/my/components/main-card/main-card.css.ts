import { style } from "@vanilla-extract/css";

export const cardWrapper = style({
  perspective: "1000px", // 3D 효과
  width: "22.1rem",
  height: "28rem",
});

export const card = style({
  width: "100%",
  height: "100%",
  position: "relative",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
});

export const flipped = style({
  transform: "rotateY(180deg)",
});

export const front = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
});

export const back = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  backgroundColor: "black",
  color: "white",
  padding: "1.6rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "1.2rem",
});
