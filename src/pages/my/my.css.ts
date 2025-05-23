import { style } from "@vanilla-extract/css";

export const myContainer = style({
  display: "flex",
  width: "100%",
});

export const lottieContainer = style({
  display: "flex",
  justifyContent: "center", // 가로 중앙 정렬
  alignItems: "center", // 세로 중앙 정렬
  width: "100%",
  height: "100%", // 부모 요소가 높이를 가지고 있어야 함
});
