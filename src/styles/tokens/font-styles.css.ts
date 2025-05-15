import { typography } from "./typography.css";
import { color } from "./color.css";

const appleFontFamily =
  '"Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif';
const hyundaiFontFamily =
  '"YouandiModern", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif';

export const fontStyles = {
  // 🍎 Apple SD Gothic Neo 스타일

  head_extrabold_28: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_28,
    fontWeight: typography.fontWeight.extrabold,
    lineHeight: typography.lineHeight.l120,
    letterSpacing: typography.letterSpacing.minus2_00,
    color: color.gray700,
  },
  head_extrabold_20: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_20,
    fontWeight: typography.fontWeight.extrabold,
    lineHeight: typography.lineHeight.l160,
    letterSpacing: typography.letterSpacing.minus2_00,
    color: color.gray700,
  },
  head_extrabold_16: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_16,
    fontWeight: typography.fontWeight.extrabold,
    lineHeight: typography.lineHeight.l160,
    letterSpacing: typography.letterSpacing.minus1_80,
    color: color.gray700,
  },
  head_extrabold_12: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_12,
    fontWeight: typography.fontWeight.extrabold,
    lineHeight: typography.lineHeight.l160,
    letterSpacing: typography.letterSpacing.minus1_80,
    color: color.gray700,
  },

  title_bold_18: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_18,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus2_00,
    color: color.gray700,
  },
  title_bold_16: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_16,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_80,
    color: color.gray700,
  },
  title_bold_14: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_14,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_20,
    color: color.gray700,
  },
  title_bold_13: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_13,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_20,
    color: color.gray700,
  },
  title_bold_12: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_12,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.zero,
    color: color.gray700,
  },
  title_bold_11: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_11,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.zero,
    color: color.gray700,
  },

  subtitle_semibold_20: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_20,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.l160,
    letterSpacing: typography.letterSpacing.minus2_00,
    color: color.gray700,
  },
  subtitle_semibold_16: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_16,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_80,
    color: color.gray700,
  },
  subtitle_semibold_15: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_15,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_80,
    color: color.gray700,
  },
  subtitle_semibold_14: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_14,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_20,
    color: color.gray700,
  },

  body1_medium_14: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_14,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.l160,
    letterSpacing: typography.letterSpacing.minus1_20,
    color: color.gray700,
  },
  body1_medium_13: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_13,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_20,
    color: color.gray700,
  },
  body1_medium12: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_12,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.zero,
    color: color.gray700,
  },

  body2_regular_14: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_14,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus1_20,
    color: color.gray700,
  },
  body2_regular_11: {
    fontFamily: appleFontFamily,
    fontSize: typography.fontSize.size_11,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.zero,
    color: color.gray700,
  },

  // 🅷 현대카드 YouandiModern 스타일

  hyundai_head_40: {
    fontFamily: hyundaiFontFamily,
    fontSize: typography.fontSize.size_40,
    lineHeight: typography.lineHeight.l140,
    letterSpacing: typography.letterSpacing.minus2_00,
    WebkitTextStroke: typography.stroke.light,
    color: color.gray700,
  },
  hyundai_title_30: {
    fontFamily: hyundaiFontFamily,
    fontSize: typography.fontSize.size_30,
    lineHeight: typography.lineHeight.l150,
    letterSpacing: typography.letterSpacing.minus2_00,
    color: color.gray700,
  },
  hyundai_body1_18: {
    fontFamily: hyundaiFontFamily,
    fontSize: typography.fontSize.size_18,
    lineHeight: typography.lineHeight.l140,
    letterSpacing: typography.letterSpacing.minus2_00,
    color: color.gray700,
  },
  hyundai_body2_14: {
    fontFamily: hyundaiFontFamily,
    fontSize: typography.fontSize.size_14,
    lineHeight: typography.lineHeight.l140,
    letterSpacing: typography.letterSpacing.minus2_00,
    color: color.gray700,
  },
} as const;
