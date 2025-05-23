import { ImageVisa } from "src/assets/svg";
import { Mastercard } from "src/assets/svg";
import * as styles from "./other-recommended-cards.css";

interface OtherRecommendedCardsProps {
  index: number;
  cardName: string;
  title: string | undefined;
  details: string | undefined;
  paymentNetwork: "VISA" | "MASTER" | "AMEX" | "";
  imageUrl: string;
}

const OtherRecommendedCards = ({
  index,
  cardName,
  title,
  details,
  paymentNetwork,
  imageUrl,
}: OtherRecommendedCardsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <p className={styles.ranking}>{`${index + 1}순위`}</p>
        <p className={styles.cardname}>{cardName}</p>
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.cardimg}>
          <img src={imageUrl} alt="card" className={styles.img} />
        </div>
        <div className={styles.cardtext}>
          <div className={styles.svgcontainer}>
            {paymentNetwork === "MASTER" && (
              <Mastercard width={"2.8rem"} height={"2.2rem"} />
            )}
            {paymentNetwork === "VISA" && (
              <ImageVisa width={"5.8rem"} height={"2.2rem"} />
            )}
          </div>
          <div className={styles.cardcontent}>
            <p className={styles.cardcontenttitle}>{title}</p>
            <p className={styles.cardcontentdetail}>{details}</p>
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
