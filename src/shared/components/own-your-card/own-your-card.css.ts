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

export const cardEntry = style({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	background: color.h_primary_gradient_1,
	width: "100%",
	height: "100%",
	borderRadius: "15px",
	gap: "40.48px",

	":hover": {
		background: `
        linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
        ${color.h_primary_gradient_1}
      `,
	},

	":active": {
		background: color.h_primary_gradient_3,
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
