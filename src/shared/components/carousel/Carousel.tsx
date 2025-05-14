import React, { useEffect, useRef, useState } from "react";
import * as styles from './carousel.css.ts';
import { IconLeftArrow, IconRightArrow } from "src/assets/svg";
import { CarouselImageContainer } from "./Carousel-image-container";
import { useDrag } from "./useDrag.ts";

const AUTO_SLIDE_INTERVAL = 5000;

export const Carousel = () => {
    const slideLength = 2;
    const slides = [
        [
          { id: 1, order: 1, src: '/images/carousel/carousel-mock1.png', width: 'half' as const, alt: '캐러셀이미지' },
          { id: 2, order: 2, src: '/images/carousel/carousel-mock2.png', width: 'quarter' as const, alt: '캐러셀이미지' },
          { id: 3, order: 3, src: '/images/carousel/carousel-mock3.png', width: 'quarter' as const, alt: '캐러셀이미지' },
        ],
        [
          { id: 4, order: 1, src: '/images/carousel/carousel-mock4.png', width: 'half' as const, alt: '캐러셀이미지' },
          { id: 5, order: 2, src: '/images/carousel/carousel-mock5.png', width: 'quarter' as const, alt: '캐러셀이미지' },
          { id: 6, order: 3, src: '/images/carousel/carousel-mock6.png', width: 'quarter' as const, alt: '캐러셀이미지' },
        ],
      ];
    
    const [curIndex, setCurIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const movePrev = () => {
        setCurIndex((prev) => Math.max(prev - 1, 0));
    }

    const moveNext = () => {
        setCurIndex((prev) => (prev + 1) % slideLength);
    }

    const { handleMouseDown, handleMouseMove, handleMouseUp } = useDrag(moveNext, movePrev);

    useEffect(() => {
      const interval = setInterval(() => {
        moveNext();
      }, AUTO_SLIDE_INTERVAL);

      return () => clearInterval(interval);
    }, [curIndex, slideLength]);

  // props로 받아올 것 
  // container의 width, height
  // 이미지들
  // 배열 총 길이 (slideLength)
  return (
  <>
    <div className={styles.container} style={{ width: '944px', height: '349px' }}>
      <button type="button" onClick={movePrev} className={styles.leftArrow} style={{ zIndex: 5 }}>
        <IconLeftArrow style={{ color: 'white', width: '70px'}} />
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
          }}>
        {slides.map((imageList, idx) => (
            <div className={styles.slide} key={idx}>
                <CarouselImageContainer imageList={imageList} />
            </div>
            ))}
      </div>
      <button type="button" onClick={moveNext} className={styles.rightArrow} style={{ zIndex: 2 }}>
        <IconRightArrow style={{ color: 'white', height: '70px' }}  />
      </button>
    </div>
  </>)
};
