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
  initMinIdx = 0,
  initMaxIdx = 3,
  range = ["0", "1", "3", "5", "10", "10~"],
}: RangeSliderProps) => {
  const [minIndex, setMinIndex] = useState(initMinIdx); // 하한값
  const [maxIndex, setMaxIndex] = useState(initMaxIdx); // 상한값

  /**
   *
   * @param index 측정할 요소의 index
   * @returns index 길이 반영해서 몇 %에 위치해야하는지 알려줌(space-between!)
   */
  const getPercentage = (index: number) => (index / (range.length - 1)) * 100;

  return (
    <div className={rangeSlideContainer}>
      <section className={baseSlider}>
        {/* 선택된 구간(검은색) */}
        <div
          className={selectedTrack}
          style={{
            left: `${getPercentage(minIndex)}%`,
            width: `${getPercentage(maxIndex) - getPercentage(minIndex)}%`,
          }}
        />
        {/* 조절하는 핸들 */}
        <div
          className={handle}
          style={{ left: `${getPercentage(minIndex)}%` }}
        />
        <div
          className={handle}
          style={{ left: `${getPercentage(maxIndex)}%` }}
        />
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
