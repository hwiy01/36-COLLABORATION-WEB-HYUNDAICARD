import * as styles from "./card-info.css";

interface CardInfoProps {
  cardName: string;
  benefits: {
    title: string;
    details: string;
  }[];
}

const CardInfo = ({ cardName, benefits }: CardInfoProps) => {
  return (
    <div className={styles.cardInfoContainer}>
      <div className={styles.cardNameContainer}>
        <p className={styles.rank}>1순위 추천</p>

        <p className={styles.name}>
          <span>{cardName}</span>
        </p>
      </div>

      <div className={styles.benefitList}>
        {benefits.map((benefit, idx) => (
          <div key={idx} className={styles.benefit}>
            <p className={styles.benefitDetail}>{benefit.title}</p>
            <p className={styles.benefitDetail}>{benefit.details}</p>
          </div>
        ))}
      </div>

      <div className={styles.btnContainer}>
        <button type="button" className={styles.annualfeeBtn}>
          연회비
        </button>
        <button type="button" className={styles.applyButton}>
          신청하기
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
