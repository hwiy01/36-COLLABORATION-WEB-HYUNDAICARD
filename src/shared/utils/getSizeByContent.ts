import type { mode } from "../components/chips/chip";

export const getSizeByContent = (text: string, mode: mode) => {
  const length = text.replace(/\s/g, "").length;

  if (mode === "input") {
    if (length <= 3) {
      return "small";
    }
    if (length <= 7) {
      return "medium";
    }
    return "large";
  }
  if (mode === "filter" || mode === "selected") {
    if (length <= 5) {
      return "small";
    }
    if (length <= 9) {
      return "medium";
    }
    return "large";
  }
  return "small";
};
