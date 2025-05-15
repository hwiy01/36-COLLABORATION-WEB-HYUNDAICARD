import type { ReactNode } from "react";
import * as styles from "./main-event.css";

interface MainEventProps {
  cardIcon: ReactNode;
  line1: string;
  line2: string;
}

const MainEvent = ({ cardIcon, line1, line2 }: MainEventProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>{cardIcon}</div>
      <div className={styles.textContainer}>
        <span className={styles.text}>{line1}</span>
        <span className={styles.text}>{line2}</span>
      </div>
    </div>
  );
};

export default MainEvent;
