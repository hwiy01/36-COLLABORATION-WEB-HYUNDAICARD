import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

// card section 기본 스타일
const baseCardConstainer = style({
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	boxSizing: "border-box", // 피그마 기준 개발하기 위해 패딩과 테부리 width/height에 포함
	transition: "padding 150ms linear",
	alignItems: "center",
	textAlign: "center",
});

// 가로-세로 모드에 따라 다르게 변화시킬 스타일
export const cardContainer = styleVariants({
	vertical: [
		baseCardConstainer,
		{
			width: "124px",
			height: "163px",
			padding: "10px 23px 0px 23px",
		},
	],
	horizontal: [
		baseCardConstainer,
		{
			width: "150px",
			height: "151px",
			padding: "10px 0px 0px 0px",
		},
	],
});


// 호버 시에는 공통적으로 위로 10px
globalStyle(
	`${cardContainer.vertical}:hover, ${cardContainer.horizontal}:hover`,
	{
		paddingTop: "0px",
		paddingBottom: "10px",
	},
);

// 정의된 폰트에 fontSize만 덮어서 추가
export const cardNameSpan = styleVariants({
	vertical: [{ ...fontStyles.caption_bold, fontSize: "13px" }],
	horizontal: [{ ...fontStyles.caption_bold, fontSize: "12px" }],
});
