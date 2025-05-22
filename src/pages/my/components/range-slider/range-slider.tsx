import { useEffect, useRef, useState } from "react";
import {
  baseSlider,
  handle,
  labelSection,
  labelStyle,
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
  const [isDragging, setIsDragging] = useState<"min" | "max" | null>(null); // 두 개 중 어떤 핸들 드래그 중인지

  const clintMousePointer = useRef<HTMLDivElement>(null);

  /**
   *
   * @param index 측정할 요소의 index
   * @returns index 길이 반영해서 몇 %에 위치해야하는지 알려줌(space-between!)
   */
  const getPercentage = (index: number) => (index / (range.length - 1)) * 100;

  /**
   *
   * @param clientMouseX 마우스의 X위치
   * (마우스의 left - 요소의 left) / 요소의 width
   * 계산해서 어느 정도 비율에 있는지 계산 -> index 반환
   * @returns 반올림된 index
   */
  const getIdxByMousePoint = (clientMouseX: number) => {
    if (!clintMousePointer.current) {
      return 0;
    }

    const elementInfo = clintMousePointer.current.getBoundingClientRect(); // DOM 크기, 위치 정보 가져오기
    const percent = (clientMouseX - elementInfo.left) / elementInfo.width;
    const index = Math.round(percent * (range.length - 1)); // 반올림해서 인덱스화!

    return index;
  };
  /**
   * 마우스가 어디로 움직이는지 값 받아서(index로) 해당 값 setIndex 해주기
   */
  const handleMouseMove = (e: MouseEvent) => {
    const newIdx = getIdxByMousePoint(e.clientX);

    if (isDragging === "min") {
      // 하한 값 핸들하고 있을 때
      if (0 <= newIdx && newIdx <= maxIndex) {
        // 상한 값보다 작거나 같을 때만 min값 세팅
        setMinIndex(newIdx);
      }
    } else if (isDragging === "max") {
      // 동일하게
      if (newIdx >= minIndex && newIdx < range.length) {
        setMaxIndex(newIdx);
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", () => setIsDragging(null));

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", () => setIsDragging(null));
      };
    }
  }, [isDragging]);

  const handleMouseDown = (type: "min" | "max") => (e: React.MouseEvent) => {
    setIsDragging(type);
    e.preventDefault();
  };

  return (
    <div className={rangeSlideContainer}>
      <section className={baseSlider} ref={clintMousePointer}>
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
          onMouseDown={handleMouseDown("min")}
        />
        <div
          className={handle}
          style={{ left: `${getPercentage(maxIndex)}%` }}
          onMouseDown={handleMouseDown("max")}
        />
      </section>
      <section className={labelSection}>
        {range.map((label, index) => (
          <p
            key={label}
            className={labelStyle}
            style={{ left: `${getPercentage(index)}%` }}
          >
            {label}
          </p>
        ))}
      </section>
    </div>
  );
};

export default RangeSlider;
