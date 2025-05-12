import { typography } from "./typography.css";

const appleFontFamily = '"Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif';
const hyundaiFontFamily = '"YouandiModern", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif';

export const fontStyles = {
    // 🍎 Apple SD Gothic Neo 스타일

    head1_extrabold: {
        fontSize: typography.fontSize.head1,
        fontWeight: typography.fontWeight.extrabold,
        lineHeight: typography.lineHeight.l120,
        letterSpacing: typography.letterSpacing.minus2_00,
    },
    head2_extrabold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.head2,
        fontWeight: typography.fontWeight.extrabold,
        lineHeight: typography.lineHeight.l160,
        letterSpacing: typography.letterSpacing.minus2_00,
    },
    head3_extrabold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.head3,
        fontWeight: typography.fontWeight.extrabold,
        lineHeight: typography.lineHeight.l160,
        letterSpacing: typography.letterSpacing.minus1_80,
    },

    title1_bold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.title1,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.minus2_00,
    },
    title2_bold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.title2,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.minus1_80,
    },
    title3_bold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.title3,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.minus1_20,
    },
    title4_bold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.title4,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.minus1_20,
    },

    subtitle1_semibold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.subtitle1,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.l160,
        letterSpacing: typography.letterSpacing.minus2_00,
    },
    subtitle2_semibold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.subtitle2,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.minus1_80,
    },

    body1_medium: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.body1,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.l160,
        letterSpacing: typography.letterSpacing.minus1_20,
    },
    body2_medium: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.body2,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.minus1_20,
    },
    body3_medium: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.body3,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.zero,
    },
    body4_regular: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.body4,
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.zero,
    },

    caption_bold: {
        fontFamily: appleFontFamily,
        fontSize: typography.fontSize.caption,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.zero,
    },

    // 🅷 현대카드 YouandiModern 스타일

    hyundai_head40: {
        fontFamily: hyundaiFontFamily,
        fontSize: "2.5rem",
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.l140,
        letterSpacing: typography.letterSpacing.minus2_00,
        WebkitTextStroke: `${typography.stroke.light}px`,
    },
    hyundai_title30: {
        fontFamily: hyundaiFontFamily,
        fontSize: "1.875rem",
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.l150,
        letterSpacing: typography.letterSpacing.minus2_00,
    },
    hyundai_body1_18: {
        fontFamily: hyundaiFontFamily,
        fontSize: "1.125rem",
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.l140,
        letterSpacing: typography.letterSpacing.minus2_00,
    },
    hyundai_body2_14: {
        fontFamily: hyundaiFontFamily,
        fontSize: "0.875rem",
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.l140,
        letterSpacing: typography.letterSpacing.minus2_00,
    },
} as const;
