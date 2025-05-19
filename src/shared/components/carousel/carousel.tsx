import React, { useEffect, useRef, useState } from "react";
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
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 0.5s ease-in-out",
  );
  const [pause, setPause] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef<boolean>(false);

  const displayList = [imgList[imgList.length - 1], ...imgList, imgList[0]];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleTransitionEnd = () => {
      if (carouselIndex === displayList.length - 1) {
        setCarouselTransition("none");
        requestAnimationFrame(() => setCarouselIndex(1));
      }
      if (carouselIndex === 0) {
        setCarouselTransition("none");
        requestAnimationFrame(() => setCarouselIndex(displayList.length - 2));
      }
      isAnimatingRef.current = false;
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [carouselIndex, displayList.length]);

  useEffect(() => {
    if (!pause) {
      const timer = setInterval(() => {
        if (!isAnimatingRef.current) {
          isAnimatingRef.current = true;
          setCarouselTransition("transform 0.5s ease-in-out");
          setCarouselIndex((prev) => prev + 1);
        }
      }, AUTO_SLIDE_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [pause]);

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
    },
  );

  const getCarouselStyles = () => ({
    transform: `translateX(-${carouselIndex * 100}%)`,
    transition: carouselTransition,
  });

  const onMoveNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCarouselTransition("transform 0.5s ease-in-out");
    setCarouselIndex((prev) => prev + 1);
  };

  const onMovePrev = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCarouselTransition("transform 0.5s ease-in-out");
    setCarouselIndex((prev) => prev - 1);
  };

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
        <IconLeftArrow style={{ color: "white", width: "70px" }} />
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
          ) : null,
        )}
      </div>

      <button
        type="button"
        onClick={onMoveNext}
        className={styles.rightArrow}
        style={{ zIndex: 2 }}
      >
        <IconRightArrow style={{ color: "white", height: "70px" }} />
      </button>
    </div>
  );
};
