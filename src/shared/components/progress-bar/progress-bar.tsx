import { useEffect, useRef, useState } from "react";
import * as styles from "./progress-bar.css";
import { AdPlay } from "../../../assets/svg";
import { AdStop } from "../../../assets/svg";

interface ProgressBarProps {
  activeIndex: number;
  onChange: (newIndex: number | ((prev: number) => number)) => void;
}

const TOTAL = 6;
const INTERVAL = 5000;

const ProgressBar = ({ activeIndex, onChange }: ProgressBarProps) => {
  const timerRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        onChange((prev) => (prev + 1) % TOTAL);
      }, INTERVAL);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [playing, onChange]);

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={togglePlay} className={styles.iconButton}>
        {playing ? (
          <AdPlay width={"1.7rem"} height={"0.8rem"} />
        ) : (
          <AdStop width={"1.7rem"} height={"0.8rem"} />
        )}
      </button>

      <div className={styles.dotContainer}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={styles.dot({ active: i === activeIndex })}
            onClick={() => onChange(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
