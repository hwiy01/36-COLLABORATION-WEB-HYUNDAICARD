import { useState } from "react";

export interface SliderInfo {
  minIndex: number;
  setMinIndex: (value: number) => void;
  maxIndex: number;
  setMaxIndex: (value: number) => void;
}

export const useGetSliderInfo = () => {
  const [minIndex, setMinIndex] = useState(0); // 하한값
  const [maxIndex, setMaxIndex] = useState(5); // 상한값
  const sliderInfo = {
    minIndex,
    setMinIndex,
    maxIndex,
    setMaxIndex,
  };

  return { sliderInfo };
};
