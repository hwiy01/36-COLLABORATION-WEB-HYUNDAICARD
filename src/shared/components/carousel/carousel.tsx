import { useRef } from "react";
import * as styles from "./carousel.css";
import { CarouselImageContainer } from "./carousel-image-container";
import { useDrag } from "../../../pages/home/hooks/use-drag";
import SvgIconRightArrow from "src/assets/svg/IconRightArrow";
import SvgIconLeftArrow from "src/assets/svg/IconLeftArrow";
import clsx from "clsx";

export interface ImageItem {
  id: number;
  order: number;
  src: string;
  width: "half" | "quarter";
  alt: string;
}

interface CarouselProps {
  size?: keyof typeof styles.containerSize; // medium | small | large
  imgList: ImageItem[][];
  displayIndex: number;
  onMoveNext: () => void;
  onMovePrev: () => void;
  onTransitionEnd: (index: number) => void;
  transitionStyle: string;
}

export const Carousel = ({
  size,
  imgList,
  displayIndex,
  onMoveNext,
  onMovePrev,
  onTransitionEnd,
  transitionStyle,
}: CarouselProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const displayList = [imgList[imgList.length - 1], ...imgList, imgList[0]];

  const getCarouselStyles = () => ({
    transform: `translateX(-${displayIndex * 100}%)`,
    transition: transitionStyle,
  });

  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDrag(
    onMoveNext,
    onMovePrev,
  );

  return (
    <div
      className={clsx(
        styles.containerBase,
        styles.containerSize[size ?? "large"],
      )}
    >
      <button type="button" onClick={onMovePrev} className={styles.leftArrow}>
        <SvgIconLeftArrow style={{ color: "white", width: "7rem" }} />
      </button>

      <div
        ref={sliderRef}
        className={styles.slider}
        style={getCarouselStyles()}
        onTransitionEnd={() => onTransitionEnd(displayIndex)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {displayList.map((imageList, idx) => (
          <div className={styles.slide} key={idx}>
            <CarouselImageContainer imageList={imageList} />
          </div>
        ))}
      </div>

      <button type="button" onClick={onMoveNext} className={styles.rightArrow}>
        <SvgIconRightArrow style={{ color: "white", height: "7rem" }} />
      </button>
    </div>
  );
};
