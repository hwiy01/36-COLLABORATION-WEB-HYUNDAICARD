import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

export const container = style({
	...themeVars.fontStyles.body1_medium,
});
