import { useState } from "react";
import * as styles from "./main-card.css";
import Chip from "src/shared/components/chips/chip";
import { ImageCardFront } from "src/assets/svg"; // 이건 테스트용 이미지 url로 바꿀거 ->cardImage

interface MainCardProps {
  cardImage: string;
  selectedFilters: {
    title: string;
    tags: string[];
  };
}
const MainCard = ({ selectedFilters }: MainCardProps) => {
  const [isHover, setIsHover] = useState(false);

  const { tags, title } = selectedFilters;

  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* clip-path 도형 (고정 위치, 플립 영향 없음) */}
      <div className={styles.clipPathShape}>
        <div className={styles.overlayContent}>
          <div className={styles.titleSection}>
            <p className={styles.text}>{"적용된 필터\n한눈에 보기"}</p>
          </div>

          <div className={styles.tagGrid}>
            {tags.map((tag) => (
              <Chip key={tag} mode="filter" content={tag} />
            ))}
          </div>

          <div className={styles.keywordSection}>
            <p className={styles.text}>적용 필터 키워드</p>
            <p className={styles.keywordHighlight}>{title}</p>
          </div>
        </div>
      </div>

      {/* 카드 이미지 (앞면/뒷면) */}
      <div className={`${styles.cardInner} ${isHover ? styles.flipped : ""}`}>
        <div className={styles.front}>
          <ImageCardFront className={styles.cardImageFront} />
          {/* <img src={cardImage} alt="카드 앞면" className={styles.cardImage} /> */}
        </div>
        <div className={styles.back}>
          <ImageCardFront className={styles.cardImageBack} />
          {/* <img src={cardImage} alt="카드 뒷면" className={styles.cardImage} /> */}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
