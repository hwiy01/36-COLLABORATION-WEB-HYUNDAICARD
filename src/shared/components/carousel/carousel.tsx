import React, { useEffect, useState } from "react";
import * as styles from "./carousel.css.ts";
import { IconLeftArrow, IconRightArrow } from "src/assets/svg";
import { CarouselImageContainer } from "./carousel-image-container";
import { useDrag } from "./use-drag.ts";

const AUTO_SLIDE_INTERVAL = 5000;

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
}

export const Carousel = ({ width, height, imgList }: CarouselProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselTransition, setCarouselTransition] = useState('');
  const [pause, setPause] = useState(false);

  // 마지막에만 클론 이미지 추가 (무한 루프용)
  const displayList = [imgList[imgList.length - 1], ...imgList, imgList[0]];

  // transition 없는 상태에서, fake 요소인 인덱스 0으로 이동
  // 원래 transition이 500ms에 걸쳐서 일어났지만,
  // 감지하기 힘들정도로 짧은 시간(10ms) 만에 transition 없이 clone 요소로 순간이동 -> 무한 스크롤처럼 보임
  const resetIndexToFirstAndTransition = () => {
    setTimeout(() => {
      setCarouselIndex(0);
      setCarouselTransition('none');
    }, 5);
  };

  const resetIndexToLastAndTransition = () => {
    setTimeout(() => {
      setCarouselIndex(displayList.length - 1);
      setCarouselTransition('none');
    }, 5);
  };

  const controlTime = carouselTransition === 'none' ? 10 : AUTO_SLIDE_INTERVAL;

  useEffect(() => {
    if (!pause) {
      const timer = setInterval(() => {
        // 마지막 인덱스 도달 시
        if (carouselIndex === displayList.length - 2) {
          resetIndexToFirstAndTransition();
        }
        setCarouselIndex((prev) => (prev + 1) % (displayList.length - 1));
        setCarouselTransition('transform 0.5s ease-in-out');
      }, controlTime);
      return () => clearInterval(timer);
    }
  }, [carouselIndex, controlTime, displayList.length, pause]);

  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDrag(
    () => setCarouselIndex((prev) => prev + 1),
    () => setCarouselIndex((prev) => Math.max(prev - 1, 0))
  );

  const getCarouselStyles = () => {
    return {
      transform: `translateX(-${carouselIndex * 100}%)`,
      transition: `${carouselTransition}`,
    };
  };

  const onMoveNext = () => {
    if(carouselIndex === displayList.length - 2) {
      // 맨 마지막 페이지인 경우
      resetIndexToFirstAndTransition();
    } else {
      setCarouselTransition('transform 0.5s ease-in-out');
      setCarouselIndex((prev) => (prev + 1) % displayList.length);
    }
  }

  const onMovePrev = () => {
    if(carouselIndex === 1) {
      // 맨 첫 페이지인 경우
      resetIndexToLastAndTransition();
    } else {
      setCarouselTransition('transform 0.5s ease-in-out');
      setCarouselIndex((prev) => (prev + 1) % displayList.length);
    }
  }

  return (
    <div
      className={styles.container}
      style={{ width: `${width}rem`, height: `${height}rem` }}
    >
      <button type="button" onClick={()=>onMovePrev()} className={styles.leftArrow} style={{ zIndex: 5 }}>
        <IconLeftArrow style={{ color: "white", width: "70px" }} />
      </button>

      <div
        className={styles.slider}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={getCarouselStyles()}
      >
        {displayList.map((imageList, idx) => (
          <div className={styles.slide} key={idx}>
            <CarouselImageContainer imageList={imageList} />
          </div>
        ))}
      </div>

      <button type="button" onClick={() => onMoveNext()} className={styles.rightArrow} style={{ zIndex: 2 }}>
        <IconRightArrow style={{ color: "white", height: "70px" }} />
      </button>
    </div>
  );
};
