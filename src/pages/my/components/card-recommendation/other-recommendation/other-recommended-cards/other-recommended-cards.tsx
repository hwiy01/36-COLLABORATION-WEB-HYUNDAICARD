import * as styles from "./other-recommended-cards.css";
import { ImageVisa } from "src/assets/svg";
import { Mastercard } from "src/assets/svg";

const OtherRecommendedCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <p className={styles.ranking}>1순위</p>
        <p className={styles.cardname}>zkemddkscjdslk</p>
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.cardimg}>
          <img src="" alt="card" />
        </div>
        <div className={styles.cardtext}>
          <div className={styles.svgcontainer}>
            <ImageVisa style={{ width: '5.8rem' }}/>
            <Mastercard style={{ width: '5.8rem' }}/>
          </div>
          <div className={styles.cardcontent}>
            <p className={styles.cardcontenttitle}>카드 이름</p>
            <p className={styles.cardcontentdetail}>카드 설명</p>
          </div>
          <button type="button" className={styles.applyButton}>
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default OtherRecommendedCards;
