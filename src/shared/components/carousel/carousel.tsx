import React, { useEffect, useRef, useState } from "react";
import * as styles from "./carousel.css.ts";
import { CarouselImageContainer } from "./carousel-image-container";
import { useDrag } from "./use-drag.ts";
import SvgIconRightArrow from "src/assets/svg/IconRightArrow.tsx";
import SvgIconLeftArrow from "src/assets/svg/IconLeftArrow.tsx";

export interface ImageItem {
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
  interval: number;
  displayIndex: number; // 클론 포함된 인덱스 (1 ~ N)
  setCarouselIndex: React.Dispatch<React.SetStateAction<number>>; // displayIndex setter
  onLogicalIndexChange: (logicalIndex: number) => void; // 0 ~ N-1
}

export const Carousel = ({
  width,
  height,
  imgList,
  interval,
  displayIndex,
  setCarouselIndex,
  onLogicalIndexChange,
}: CarouselProps) => {
  const [carouselTransition, setCarouselTransition] = useState("transform 0.5s ease-in-out");
  const [pause, setPause] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef<boolean>(false);
  const displayList = [imgList[imgList.length - 1], ...imgList, imgList[0]]; // 실제 보여지는 리스트 (클론 포함)

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) { return };

    const handleTransitionEnd = () => {
      const lastIdx = displayList.length - 2;
      let logicalIdx = displayIndex - 1;
    
      if (displayIndex === displayList.length - 1) {
        // 마지막 -> 첫번째 이동 시 클론으로 순간이동
        setCarouselTransition("none");
        requestAnimationFrame(() => {
          setCarouselIndex(1);
          requestAnimationFrame(() => {
            setCarouselTransition("transform 0.5s ease-in-out");
          });
        });
        logicalIdx = 0;
      } else if (displayIndex === 0) {
        // 첫 번째 -> 마지막 이동 시 클론으로 순간이동
        setCarouselTransition("none");
        requestAnimationFrame(() => {
          setCarouselIndex(lastIdx);
          requestAnimationFrame(() => {
            setCarouselTransition("transform 0.5s ease-in-out");
          });
        });
        logicalIdx = lastIdx - 1;
      }
    
      onLogicalIndexChange(logicalIdx);
      isAnimatingRef.current = false;
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () => slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [displayIndex, displayList.length, setCarouselIndex, onLogicalIndexChange]);

  useEffect(() => {
    if (!pause) {
      // 5초마다 슬라이드 이동
      const timer = setInterval(() => {
        if (!isAnimatingRef.current) {
          isAnimatingRef.current = true;
          setCarouselTransition("transform 0.5s ease-in-out");
          setCarouselIndex((prev) => prev + 1);
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [pause, interval, setCarouselIndex]);

  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDrag(
    () => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        setCarouselTransition("transform 0.5s ease-in-out");
        setCarouselIndex((prev) => prev + 1);
      }
    },
    () => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        setCarouselTransition("transform 0.5s ease-in-out");
        setCarouselIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  );

  const onMoveNext = () => {
    if (isAnimatingRef.current) { return };
    isAnimatingRef.current = true;
    setCarouselTransition("transform 0.5s ease-in-out");
    setCarouselIndex((prev) => prev + 1);
  };

  const onMovePrev = () => {
    if (isAnimatingRef.current) { return };
    isAnimatingRef.current = true;
    setCarouselTransition("transform 0.5s ease-in-out");
    setCarouselIndex((prev) => prev - 1);
  };

  const getCarouselStyles = () => ({
    transform: `translateX(-${displayIndex * 100}%)`,
    transition: carouselTransition,
  });

  return (
    <div
      className={styles.container}
      style={{ width: `${width}rem`, height: `${height}rem` }}
    >
      <button
        type="button"
        onClick={onMovePrev}
        className={styles.leftArrow}
        style={{ zIndex: 5 }}
      >
        <SvgIconLeftArrow style={{ color: "white", width: "70px" }} />
      </button>

      <div
        className={styles.slider}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={getCarouselStyles()}
      >
        {displayList.map((imageList, idx) =>
          imageList ? (
            <div className={styles.slide} key={idx}>
              <CarouselImageContainer imageList={imageList} />
            </div>
          ) : null
        )}
      </div>

      <button
        type="button"
        onClick={onMoveNext}
        className={styles.rightArrow}
        style={{ zIndex: 2 }}
      >
        <SvgIconRightArrow style={{ color: "white", height: "70px" }} />
      </button>
    </div>
  );
};
