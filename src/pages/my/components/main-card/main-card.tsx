import { useState } from "react";
import * as styles from "./main-card.css";

interface MainCardProps {
  cardImage: string;
  children: React.ReactNode;
}

const MainCard = ({ cardImage, children }: MainCardProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={styles.cardWrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* ✅ clip-path 도형 (고정 위치, 플립 영향 없음) */}
      <div className={styles.clipPathShape}>
        <div className={styles.overlayContent}>{children}</div>
      </div>

      {/* ✅ 플립 애니메이션 적용 대상 */}
      <div className={`${styles.cardInner} ${isHover ? styles.flipped : ""}`}>
        {/* 카드 앞면 */}
        <div className={styles.front}>
          <img src={cardImage} alt="카드 앞면" className={styles.cardImage} />
        </div>

        {/* 카드 뒷면 */}
        <div className={styles.back}>
          <img src={cardImage} alt="카드 뒷면" className={styles.cardImage} />
        </div>
      </div>
    </div>
  );
};
export default MainCard;
