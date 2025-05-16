import { keyframes, style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "../../../styles/tokens/font-styles.css";

const floatingAnimation = keyframes({
  "0%": {
    paddingTop: "1rem",
    paddingBottom: "0rem",
  },
  "50%": {
    paddingTop: "0rem",
    paddingBottom: "1rem",
  },
  "100%": {
    paddingTop: "1rem",
    paddingBottom: "0rem",
  },
});

// 컴포넌트 전체 css(플로팅 영역까지 포함 - padding으로 조절)
export const cardContainer = style({
  width: "24.8rem",
  height: "39.2rem",
  paddingTop: "1rem",
  paddingBottom: "0rem",
  animation: `${floatingAnimation} 2s ease-in-out infinite`,

  ":hover": {
    animation: "none",
    paddingTop: "0rem",
    paddingBottom: "1rem",
  },

  transition: "padding-top 1s ease, padding-bottom 1s ease",
});

// 플로팅 영역 제외 카드 부분 css - position 활용한 overlay
export const cardEntry = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: color.h_primary_gradient_1,
  width: "100%",
  height: "100%",
  borderRadius: "1.5rem",
  gap: "4.048rem",
  position: "relative",
  border: "none",

  // 클릭 시
  ":active": {
    background: color.h_primary_gradient_3,
  },
});

// 오버레이 될 투명한 커버
export const cardOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  borderRadius: "1.5rem",
  backgroundColor: "rgba(255,255,255,0.2)",
  opacity: 0,
  pointerEvents: "none",
  zIndex: 50,
});

export const cardHoverEffect = style({
  ":hover": {
    [`& .${cardOverlay}`]: {
      opacity: 1,
    },
  },
  ":active": {
    [`& .${cardOverlay}`]: {
      opacity: 0,
    },
  },
});

export const logoStyle = style({
  marginTop: "12.2rem",
});

export const flagComment = style({
  width: "22.1rem",
  height: "4.5rem",
  borderRadius: "0.8rem",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...fontStyles.title_bold_13,
  fontWeight: "400",
});
