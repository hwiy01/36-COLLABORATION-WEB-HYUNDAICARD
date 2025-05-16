import { style } from "@vanilla-extract/css";
import { fontStyles } from "src/styles/tokens/font-styles.css";
import { color } from "src/styles/tokens/color.css";

export const container = style({
  width: "22.1rem",
  height: "28rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  boxSizing: "border-box",
  gap: "1.3rem",
});

export const imageContainer = style({
  width: "100%",
  height: "22.1rem",
  paddingTop: "1rem",
  transition: "padding 150ms linear",
  selectors: {
    "&:hover": {
      paddingTop: "0rem",
    },
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover", // 이미지 크기 조정
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0rem 0rem 0rem 0.3rem",
  maxWidth: "175px", // 텍스트가 175px 너비를 넘지 않도록 설정
});

export const text = style([
  fontStyles.head_extrabold_12,
  {
    color: color.h_black,
    whiteSpace: "normal", // 기본적인 줄바꿈 적용
    wordWrap: "normal", // 단어 단위로 줄바꿈
    wordBreak: "normal", // 단어가 넘어가면 전체 단어를 줄바꿈 처리
  },
]);
