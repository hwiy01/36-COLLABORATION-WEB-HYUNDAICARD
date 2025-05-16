import type { ReactNode } from "react";
import * as styles from "./main-event.css";

interface MainEventProps {
  cardIcon: ReactNode;
  textContent: string; // 한 줄로 받는 텍스트
}

const MainEvent = ({ cardIcon, textContent }: MainEventProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={cardIcon as string}
          alt="Card Icon"
        />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>{textContent}</span>
      </div>
    </div>
  );
};

export default MainEvent;
