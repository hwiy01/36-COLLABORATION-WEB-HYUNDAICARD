import { useState } from "react";

export const useGetSliderInfo = () => {
  const [minIndex, setMinIndex] = useState(0); // 하한값
  const [maxIndex, setMaxIndex] = useState(5); // 상한값

  return { minIndex, setMinIndex, maxIndex, setMaxIndex };
};
