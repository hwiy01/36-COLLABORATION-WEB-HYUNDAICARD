import { useRef } from "react";

export const useDrag = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (_e: React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) {
      return;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) {
      return;
    }

    const endX = e.clientX;
    const deltaX = endX - startX.current;
    const threshold = 40;

    if (deltaX > threshold) {
      onSwipeRight();
    } else if (deltaX < -threshold) {
      onSwipeLeft();
    }

    startX.current = null;
    isDragging.current = false;
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
