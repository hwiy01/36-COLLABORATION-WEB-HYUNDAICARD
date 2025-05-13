import { style } from "@vanilla-extract/css";
import { fontStyles } from "src/styles/tokens/font-styles.css";

export const baseTextButtonContainer = style({
	display: "flex",
	minWidth: "86px",
	gap: "4px",
	alignItems: "center",
	background: "none",
	border: "none",
	":hover": {
		cursor: "pointer",
	},
});

export const buttonText = style({
	...fontStyles.caption_bold,
	fontSize: "11px",
	letterSpacing: "0px",
	lineHeight: "100%",
});
