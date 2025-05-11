import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("html, body", {
    fontFamily: "Apple SD Gothic Neo, Malgun Gothic, YouandiModern, Noto Sans KR, sans-serif",
    margin: "0",
    padding: "0",
});

export const rootStyle = style({
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
    margin: "0 auto",
});
