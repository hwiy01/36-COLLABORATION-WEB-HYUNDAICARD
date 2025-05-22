import { useState } from "react";
import {
  baseSlider,
  handle,
  labelSection,
  rangeSlideContainer,
  selectedTrack,
} from "./ranger-slier.css";

interface RangeSliderProps {
  range?: string[];
  initMinIdx?: number;
  initMaxIdx?: number;
}

const RangeSlider = ({
  initMaxIdx = 0,
  initMinIdx = 3,
  range = ["0", "1", "3", "5", "10", "10~"],
}: RangeSliderProps) => {
  const [minIndex, setMinIndex] = useState(initMinIdx); // 하한값
  const [maxIndex, setMaxIndex] = useState(initMaxIdx); // 상한값
  return (
    <div className={rangeSlideContainer}>
      <section className={baseSlider}>
        <div className={selectedTrack} />
        <div className={handle}>dd</div>
        <div className={handle}>dd</div>
      </section>
      <section className={labelSection}>
        {range.map((label, index) => (
          <p key={label}>{label}</p>
        ))}
      </section>
    </div>
  );
};

export default RangeSlider;
