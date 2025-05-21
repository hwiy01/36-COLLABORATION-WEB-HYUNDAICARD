import * as styles from "./progress-bar.css";
import { AdPlay } from "../../../assets/svg";
import { AdStop } from "../../../assets/svg";

interface ProgressBarProps {
  activeIndex: number;
  onChange: (index: number) => void;
  slideCount: number;
  playing: boolean;
  togglePlay: () => void;
}

const ProgressBar = ({
  activeIndex,
  slideCount,
  playing,
  onChange,
  togglePlay,
}: ProgressBarProps) => {
  return (
    <div className={styles.container}>
      <button onClick={togglePlay} className={styles.iconButton}>
        {playing ? <AdPlay width="1.7rem" height="0.8rem" /> : <AdStop width="1.7rem" height="0.8rem" />}
      </button>
      <div className={styles.dotContainer}>
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            className={styles.dot({ active: i === activeIndex })}
            onClick={() => onChange(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
