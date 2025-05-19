import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

// card section 기본 스타일
const baseCardConstainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  boxSizing: "border-box",
  transition: "padding 150ms linear",
  alignItems: "center",
  textAlign: "center",
});

// 가로-세로 모드에 따라 다르게 변화시킬 스타일
export const cardContainer = styleVariants({
  vertical: [
    baseCardConstainer,
    {
      width: "12.4rem",
      height: "16.3rem",
      padding: "1rem 2.3rem 0rem 2.3rem",
    },
  ],
  horizontal: [
    baseCardConstainer,
    {
      width: "15rem",
      height: "15.1rem",
      padding: "1rem 0rem 0rem 0rem",
    },
  ],
});

// 호버 시에는 공통적으로 위로 1rem
globalStyle(
  `${cardContainer.vertical}:hover, ${cardContainer.horizontal}:hover`,
  {
    paddingTop: "0rem",
    paddingBottom: "1rem",
  },
);

// 정의된 폰트에 fontSize만 덮어서 추가
export const cardNameP = styleVariants({
  vertical: [{ ...fontStyles.caption_bold, fontSize: "1.3rem" }],
  horizontal: [{ ...fontStyles.caption_bold, fontSize: "1.2rem" }],
});
