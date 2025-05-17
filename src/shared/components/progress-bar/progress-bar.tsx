import { useEffect, useRef, useState } from "react";
import * as styles from "./progress-bar.css";

interface ProgressBarProps {
  activeIndex: number;
  onChange: (newIndex: number) => void;
}

const TOTAL = 6;
const INTERVAL = 5000;

const ProgressBar = ({ activeIndex, onChange }: ProgressBarProps) => {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        onChange((activeIndex + 1) % TOTAL);
      }, INTERVAL);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [playing, activeIndex, onChange]);

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={togglePlay}>
        {playing ? "⏸ 중지" : "▶️ 재생"}
      </button>
      <div className={styles.dotContainer}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
            className={`${styles.circle} ${i === activeIndex ? styles.active : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
