import React, { useEffect, useRef, useState } from "react";
import * as styles from "./carousel.css.ts";
import { IconLeftArrow, IconRightArrow } from "src/assets/svg";
import { CarouselImageContainer } from "./carousel-image-container";
import { useDrag } from "./use-drag.ts";

const AUTO_SLIDE_INTERVAL = 5000;

interface ImageItem {
  id: number;
  order: number;
  src: string;
  width: "half" | "quarter";
  alt: string;
}

interface CarouselProps {
  width: number;
  height: number;
  imgList: ImageItem[][];
}

export const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  imgList,
}) => {
  const slideLength = imgList.length;

  const [curIndex, setCurIndex] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (curIndex === 0) {
      setCurIndex(slideLength - 1);
    } else {
      setCurIndex((prev) => Math.max(prev - 1));
    }
  };

  const moveNext = () => {
    setCurIndex((prev) => (prev + 1) % slideLength);
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDrag(
    moveNext,
    movePrev,
  );

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!pause) {
      intervalRef.current = setInterval(() => {
        moveNext();
      }, AUTO_SLIDE_INTERVAL);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [curIndex, slideLength, pause]);

  // [프로그래스 바]
  // 정지 & 재생 함수 -> setPause
  // 정지 상태 -> pause
  // 인덱스 설정 함수 -> setCurIndex
  return (
    <>
      <div
        className={styles.container}
        style={{ width: `${width}rem`, height: `${height}rem` }}
      >
        <button
          type="button"
          onClick={movePrev}
          className={styles.leftArrow}
          style={{ zIndex: 5 }}
        >
          <IconLeftArrow style={{ color: "white", width: "70px" }} />
        </button>
        <div
          ref={sliderRef}
          className={styles.slider}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            transform: `translateX(-${curIndex * 100}%)`,
            transition: "transform 150ms ease-in-out",
          }}
        >
          {imgList.map((imageList, idx) => (
            <div className={styles.slide} key={idx}>
              <CarouselImageContainer imageList={imageList} />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={moveNext}
          className={styles.rightArrow}
          style={{ zIndex: 2 }}
        >
          <IconRightArrow style={{ color: "white", height: "70px" }} />
        </button>
      </div>
    </>
  );
};
