import { useState } from "react";
import * as styles from "./main-card.css";

interface MainCardProps {
  frontImage: string;
  backContent: React.ReactNode;
}

const MainCard = ({ frontImage, backContent }: MainCardProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={styles.cardWrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={`${styles.card} ${isHover ? styles.flipped : ""}`}>
        <div className={styles.front}>
          <img src={frontImage} alt="카드 앞면" className={styles.cardImage} />
        </div>
        <div className={styles.back}>{backContent}</div>
      </div>
    </div>
  );
};

export default MainCard;
