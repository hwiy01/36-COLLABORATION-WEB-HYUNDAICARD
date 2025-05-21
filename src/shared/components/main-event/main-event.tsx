import * as styles from "./main-event.css";

/**
 * @param cardIconUrl 카드 아이콘 URL
 * @param textContent 카드 설명
 * @param cardName 카드 이름
 */

interface MainEventProps {
  cardIconUrl?: string;
  textContent?: string;
  cardName?: string;
}

const MainEvent = ({ cardIconUrl, textContent, cardName }: MainEventProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={cardIconUrl} alt={cardName} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>{textContent}</span>
      </div>
    </div>
  );
};

export default MainEvent;
