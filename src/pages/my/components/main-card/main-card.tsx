import { useState } from "react";
import * as styles from "./main-card.css";
import Chip from "src/shared/components/chips/chip";

interface MainCardProps {
  cardImage: string;
  children: React.ReactNode;
}

const MainCard = ({ cardImage, children }: MainCardProps) => {
  const [isHover, setIsHover] = useState(false);

  const tags = [
    "여행",
    "오프라인 쇼핑",
    "커피",
    "마일리지/공항라운지",
    "생활 서비스",
  ];

  return (
    <div
      className={styles.cardWrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* clip-path 도형 (고정 위치, 플립 영향 없음) */}
      <div className={styles.clipPathShape}>
        <div className={styles.overlayContent}>
          <div className={styles.titleSection}>
            <p className={styles.text}>{"적용된 필터\n한눈에 보기"}</p>
          </div>
          {/* 필터 태그 */}
          <div className={styles.tagGrid}>
            {tags.map((tag) => (
              <Chip key={tag} mode="filter" content={tag} />
            ))}
          </div>
          {/* 키워드 강조 */}
          <div className={styles.keywordSection}>
            <p className={styles.text}>적용 필터 키워드</p>
            <p className={styles.keywordHighlight}>라이프스타일 / 여행</p>
          </div>
        </div>
      </div>

      {/* 플립 애니메이션 적용 대상 */}
      <div className={`${styles.cardInner} ${isHover ? styles.flipped : ""}`}>
        <div className={styles.front}>
          <img src={cardImage} alt="카드 앞면" className={styles.cardImage} />
        </div>

        <div className={styles.back}>
          <img src={cardImage} alt="카드 뒷면" className={styles.cardImage} />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
