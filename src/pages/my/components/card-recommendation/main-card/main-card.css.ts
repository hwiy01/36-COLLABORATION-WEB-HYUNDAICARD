import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";
import { color } from "src/styles/tokens/color.css";

const clipPathValue =
  "polygon( 69.485% 3.172%,94.238% 17.914%,94.238% 17.914%,95.23% 18.555%,96.129% 19.242%,96.933% 19.969%,97.639% 20.732%,98.244% 21.528%,98.745% 22.353%,99.139% 23.202%,99.425% 24.071%,99.598% 24.956%,99.656% 25.854%,99.656% 96.732%,99.656% 96.732%,99.593% 97.227%,99.411% 97.696%,99.119% 98.134%,98.728% 98.533%,98.247% 98.889%,97.687% 99.194%,97.056% 99.442%,96.366% 99.627%,95.626% 99.742%,94.845% 99.782%,42.379% 99.782%,42.379% 99.782%,41.016% 99.748%,39.671% 99.646%,38.348% 99.478%,37.054% 99.246%,35.794% 98.95%,34.574% 98.593%,33.401% 98.177%,32.279% 97.701%,31.215% 97.169%,30.214% 96.582%,5.361% 80.785%,5.361% 80.785%,4.44% 80.152%,3.605% 79.478%,2.86% 78.768%,2.207% 78.026%,1.647% 77.255%,1.184% 76.458%,0.82% 75.64%,0.557% 74.804%,0.397% 73.954%,0.344% 73.093%,0.344% 3.268%,0.344% 3.268%,0.407% 2.773%,0.589% 2.304%,0.881% 1.866%,1.272% 1.467%,1.753% 1.111%,2.313% 0.806%,2.944% 0.558%,3.634% 0.373%,4.374% 0.258%,5.155% 0.218%,57.721% 0.218%,57.721% 0.218%,59.026% 0.249%,60.317% 0.343%,61.587% 0.497%,62.833% 0.711%,64.047% 0.983%,65.227% 1.312%,66.365% 1.697%,67.458% 2.136%,68.499% 2.628%,69.485% 3.172% )";
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
  clipPath: clipPathValue,
  backgroundColor: color.h_black,
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
});
