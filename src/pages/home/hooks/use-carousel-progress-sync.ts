import { useCallback, useEffect, useRef, useState } from "react";

export const useCarouselProgressSync = (
  interval: number,
  slideCount: number,
) => {
  const [progressbarIndex, setProgressbarIndex] = useState(0); // 0 ~ N-1
  const [displayIndex, setDisplayIndex] = useState(1); // 1 ~ N (클론 포함)
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 0.5s ease-in-out",
  );
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  // 다음 화살표 클릭
  const onMoveNext = useCallback(() => {
    if (isAnimatingRef.current) {
      return;
    }
    isAnimatingRef.current = true;
    setCarouselTransition("transform 0.5s ease-in-out");
    setDisplayIndex((prev) => prev + 1);
  }, []);

  // 이전 화살표 클릭
  const onMovePrev = useCallback(() => {
    if (isAnimatingRef.current) {
      return;
    }
    isAnimatingRef.current = true;
    setCarouselTransition("transform 0.5s ease-in-out");
    setDisplayIndex((prev) => prev - 1);
  }, []);

  // 프로그래스바의 dot 클릭 시 해당 인덱스로 이동
  const goTo = useCallback((index: number) => {
    isAnimatingRef.current = true;
    setCarouselTransition("transform 0.5s ease-in-out");
    setProgressbarIndex(index);
    setDisplayIndex(index + 1);
  }, []);

  const togglePlay = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  // n초마다 자동 넘어감
  useEffect(() => {
    if (playing) {
      timerRef.current = window.setInterval(onMoveNext, interval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [playing, interval, onMoveNext, displayIndex]);

  // transition 애니메이션이 끝날 때 호출될 함수!
  const handleTransitionEnd = useCallback(
    (currentDisplayIndex: number) => {
      const lastIdx = slideCount;
      let logicalIdx = currentDisplayIndex - 1;

      // 마지막 -> 첫번째 이동 시 클론으로 순간이동
      if (currentDisplayIndex === lastIdx + 1) {
        setCarouselTransition("none");
        setDisplayIndex(1);
        logicalIdx = 0;
      }
      // 첫번째 -> 마지막 이동 시 클론으로 순간이동
      else if (currentDisplayIndex === 0) {
        setCarouselTransition("none");
        setDisplayIndex(lastIdx);
        logicalIdx = lastIdx - 1;
      }

      setProgressbarIndex(logicalIdx);
      isAnimatingRef.current = false;
    },
    [slideCount],
  );

  return {
    displayIndex,
    progressbarIndex,
    carouselTransition,
    onMoveNext,
    onMovePrev,
    goTo,
    togglePlay,
    playing,
    handleTransitionEnd,
  };
};
