import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

// ✅ 클립 패스 값
const clipPathValue =
  "polygon(92.243% 0%, 11.748% 0%, 11.362% 0.027%, 10.979% 0.107%, 10.6% 0.241%, 10.227% 0.426%, 9.86% 0.662%, 9.501% 0.948%, 9.15% 1.284%, 8.81% 1.668%, 8.481% 2.1%, 8.163% 2.58%, 2.421% 11.863%, 1.983% 12.643%, 1.584% 13.501%, 1.226% 14.43%, 0.911% 15.423%, 0.639% 16.473%, 0.413% 17.573%, 0.235% 18.716%, 0.106% 19.894%, 0.027% 21.101%, 0% 22.33%, 0% 83.148%, 0.102% 85.881%, 0.395% 88.474%, 0.866% 90.892%, 1.497% 93.1%, 2.272% 95.064%, 3.176% 96.748%, 4.192% 98.119%, 5.305% 99.141%, 6.499% 99.779%, 7.757% 100%, 88.605% 100%, 88.996% 99.972%, 89.383% 99.89%, 89.765% 99.754%, 90.142% 99.566%, 90.512% 99.325%, 90.874% 99.033%, 91.228% 98.691%, 91.571% 98.299%, 91.902% 97.858%, 92.222% 97.37%, 97.611% 88.541%, 98.043% 87.76%, 98.437% 86.904%, 98.79% 85.977%, 99.102% 84.988%, 99.37% 83.943%, 99.592% 82.849%, 99.768% 81.714%, 99.896% 80.543%, 99.974% 79.344%, 100% 78.124%, 100% 16.852%, 99.898% 14.119%, 99.605% 11.526%, 99.134% 9.108%, 98.503% 6.9%, 97.728% 4.936%, 96.824% 3.252%, 95.808% 1.881%, 94.695% 0.859%, 93.501% 0.221%, 92.243% 0%)";

export const cardWrapper = style({
  position: "relative",
  width: "30.7rem",
  height: "47.4rem",
  perspective: "1000px",
});

export const cardInner = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s ease-in-out",
  zIndex: 3,
});

export const flipped = style({
  transform: "rotateY(180deg)",
  zIndex: 0,
});

export const front = style({
  position: "absolute",
  width: "28.9rem",
  height: "45.7rem",
  backfaceVisibility: "hidden",
});

export const back = style({
  position: "absolute",
  width: "28.9rem",
  height: "45.7rem",
  top: "1.7rem",
  right: "1.8rem",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
});

export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const clipPathShape = style({
  position: "absolute",
  width: "28.9rem",
  height: "45.7rem",
  top: 0,
  left: 0,
  clipPath: clipPathValue,
  background: color.h_black,
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const overlayContent = style({
  padding: "72rem auto auto 24rem",
  position: "relative",
  zIndex: 2,
});

// 카드 안에 내용
export const clipPathContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
  clipPath: clipPathValue,
  backgroundColor: color.h_black,
  overflow: "hidden",
});

export const filterOverlay = style({
  position: "absolute",
  top: "5%",
  left: "5%",
  width: "90%",
  backgroundColor: color.h_black,
  borderRadius: "1rem",
  padding: "1.6rem",
  color: "white",
  fontSize: "1.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

export const titleSection = style({
  display: "flex",
  flexDirection: "column",
});

export const tagGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
});

export const tagItem = style({
  padding: "0.6rem 1.2rem",
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: "1rem",
  fontSize: "1.2rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
});

export const keywordSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const keywordHighlight = style({
  color: color.h_primary_blue,
  ...themeVars.fontStyles.head_extrabold_20,
});

export const text = style({
  whiteSpace: "pre-line",
  color: color.h_white,
  ...themeVars.fontStyles.head_extrabold_12,
});
