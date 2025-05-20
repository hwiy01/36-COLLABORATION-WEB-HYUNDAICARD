import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

const cardDimensions = {
  width: "28.9rem",
  height: "45.7rem",
};

const zIndex = {
  overlay: 2,
  flipped: 0,
  default: 3,
};

// 공통 이미지 스타일
export const cardImageCommon = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const cardImageFront = cardImageCommon;

export const cardImageBack = style([
  cardImageCommon,
  {
    transform: "scaleX(-1)",
  },
]);

export const cardContainer = style({
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
  zIndex: zIndex.default,
});

export const flipped = style({
  transform: "rotateY(180deg)",
  zIndex: zIndex.flipped,
});

export const front = style({
  position: "absolute",
  ...cardDimensions,
  backfaceVisibility: "hidden",
});

export const back = style({
  position: "absolute",
  ...cardDimensions,
  top: "1.7rem",
  right: "1.8rem",
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
});

export const clipPathShape = style({
  position: "absolute",
  ...cardDimensions,
  top: 0,
  left: 0,
  zIndex: zIndex.overlay,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "2.4rem",
});

export const overlayContent = style({
  position: "relative",
});

export const titleSection = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1.4rem",
});

export const tagGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
  marginBottom: "2.2rem",
});

export const keywordSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.4rem",
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

// 카드 배경 SVG-> 없앨 코드
export const cardBackgroundSvg = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  padding: "72rem auto auto 24rem",
});
