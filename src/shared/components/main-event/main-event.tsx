import * as styles from "./main-event.css";

interface MainEventProps {
  cardIconUrl: string;
  textContent: string;
}

const MainEvent = ({ cardIconUrl, textContent }: MainEventProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={cardIconUrl} alt="Card Icon" />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.text}>{textContent}</span>
      </div>
    </div>
  );
};

export default MainEvent;
