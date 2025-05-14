import { keyframes, style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";
import { fontStyles } from "../../../styles/tokens/font-styles.css";

const floatingAnimation = keyframes({
	"0%": {
		paddingTop: "10px",
		paddingBottom: "0px",
	},
	"50%": {
		paddingTop: "0px",
		paddingBottom: "10px",
	},
	"100%": {
		paddingTop: "10px",
		paddingBottom: "0px",
	},
});

// 컴포넌트 전체 css(플로팅 영역까지 포함)
export const cardContainer = style({
	width: "248px",
	height: "392px",
	paddingTop: "10px", // 플로팅(?)할 패딩 공간
	paddingBottom: "0px",
	animation: `${floatingAnimation} 2s ease-in-out infinite`,

	":hover": {
		// 호버 시 패딩값 조절하면서 플로팅
		animation: "none",
		paddingTop: "0px",
		paddingBottom: "10px",
	},

	transition: "padding-top 1s ease, padding-bottom 1s ease",
});

// 플로팅 영역 제외 카드 부분 css
export const cardEntry = style({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	background: color.h_primary_gradient_1,
	width: "100%",
	height: "100%",
	borderRadius: "15px",
	gap: "40.48px",
	position: "relative", // 오버레이를 위한
	border: "none",

	":active": {
		// 클릭 시 배경 색 진하게
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
	borderRadius: "15px",
	backgroundColor: "rgba(255,255,255,0.2)",
	opacity: 0,
	pointerEvents: "none",
	zIndex: 50,
});

export const cardHoverEffect = style({
	// 호버 시 오버레이 on
	":hover": {
		[`& .${cardOverlay}`]: {
			opacity: 1,
		},
	},
	// 클릭하면 오버레이 off
	":active": {
		[`& .${cardOverlay}`]: {
			opacity: 0,
		},
	},
});

export const logoStyle = style({
	marginTop: "122px",
});

export const flagComment = style({
	width: "221px",
	height: "45px",
	borderRadius: "8px",
	backgroundColor: "black",
	color: "white",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	...fontStyles.hyundai_title30,
	fontSize: "13px",
});
