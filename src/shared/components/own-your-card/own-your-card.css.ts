import { style } from "@vanilla-extract/css";
import { color } from "src/styles/tokens/color.css";

export const cardContainer = style({
	width: "248px",
	height: "392px",
	paddingTop: "10px", // 플로팅(?)할 패딩 공간
	paddingBottom: "0px",

	":hover": {
		// 호버 시 패딩값 조절하면서 플로팅
		paddingTop: "0px",
		paddingBottom: "10px",
	},

	transition: "padding-top 1s ease, padding-bottom 1s ease",
});

export const cardEntry = style({
	background: color.h_primary_gradient_1,
	width: "100%",
	height: "100%",
	borderRadius: "15px",

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
