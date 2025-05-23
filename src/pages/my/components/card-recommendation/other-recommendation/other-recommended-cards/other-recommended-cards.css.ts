import { style } from "@vanilla-extract/css";
import { themeVars } from "src/styles";

const clipPathValue =
  "polygon( 2.446% 35.18%,13.585% 6.766%,13.585% 6.766%,14.07% 5.629%,14.588% 4.597%,15.138% 3.675%,15.715% 2.865%,16.317% 2.171%,16.941% 1.596%,17.584% 1.143%,18.242% 0.815%,18.912% 0.617%,19.591% 0.55%,97.468% 0.549%,97.468% 0.549%,97.841% 0.621%,98.195% 0.829%,98.525% 1.162%,98.827% 1.609%,99.095% 2.157%,99.325% 2.797%,99.513% 3.516%,99.652% 4.304%,99.739% 5.149%,99.77% 6.039%,99.77% 51.319%,99.77% 51.319%,99.744% 52.869%,99.667% 54.4%,99.542% 55.905%,99.367% 57.378%,99.146% 58.811%,98.878% 60.2%,98.565% 61.536%,98.208% 62.813%,97.809% 64.026%,97.368% 65.166%,85.434% 93.692%,85.434% 93.692%,84.955% 94.749%,84.446% 95.706%,83.909% 96.562%,83.348% 97.312%,82.764% 97.954%,82.161% 98.485%,81.542% 98.903%,80.909% 99.206%,80.265% 99.389%,79.613% 99.451%,2.533% 99.451%,2.533% 99.451%,2.159% 99.379%,1.805% 99.171%,1.475% 98.838%,1.173% 98.391%,0.905% 97.843%,0.675% 97.203%,0.487% 96.484%,0.348% 95.696%,0.261% 94.851%,0.23% 93.961%,0.23% 48.569%,0.23% 48.569%,0.254% 47.084%,0.324% 45.616%,0.44% 44.171%,0.6% 42.754%,0.804% 41.372%,1.051% 40.03%,1.34% 38.734%,1.669% 37.489%,2.038% 36.303%,2.446% 35.18% )";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "3.2rem 4.9rem 3.0rem 3.2rem",
  justifyContent: "space-between",
  backgroundColor: themeVars.color.gray100,
  borderRadius: "1.2rem",
  width: "100rem",
});

export const textbox = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  marginBottom: "2.2rem",
});

export const ranking = style({
  ...themeVars.fontStyles.title_bold_12,
  color: themeVars.color.gray700,
});

export const cardname = style({
  ...themeVars.fontStyles.head_extrabold_20,
  color: themeVars.color.h_black,
});

export const cardinfo = style({
  display: "flex",
  justifyContent: "space-between",
});

export const cardimg = style({
  width: "44.6rem",
  height: "24.2rem",
  overflow: "hidden",
  alignItems: "end",
});

export const cardtext = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const cardcontent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
  clipPath: clipPathValue,
  backgroundColor: themeVars.color.h_black,
  width: "43.4rem",
  height: "18.2rem",
  padding: "2.2rem 3.1rem 2.2rem 8.0rem",
});

export const cardcontenttitle = style({
  ...themeVars.fontStyles.head_extrabold_12,
  color: themeVars.color.h_white,
});

export const cardcontentdetail = style({
  ...themeVars.fontStyles.body2_regular_11,
  color: themeVars.color.gray200,
});

export const applyButton = style({
  cursor: "pointer",
  border: "none",
  ...themeVars.fontStyles.title_bold_12,
  width: "8.0rem",
  height: "3.6rem",
  borderRadius: "0.8rem",
  backgroundColor: themeVars.color.h_black,
  color: themeVars.color.h_white,
});

export const svgcontainer = style({
  display: "flex",
  gap: "0.4rem",
  justifyContent: "flex-end",
  width: "100%",
  height: "2.2rem",
});

export const img = style({
  width: "100%",
  height: "100%",
});
