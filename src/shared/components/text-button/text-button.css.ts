import { style } from "@vanilla-extract/css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const baseTextButtonContainer = style({
	display: "flex",
	justifyContent: "space-between",
	minWidth: "86px",
	alignItems: "center",
	background: "none",
	border: "none",
	":hover": {
		cursor: "pointer",
	},
	...fontStyles.caption_bold,
	fontSize: "11px",
});
