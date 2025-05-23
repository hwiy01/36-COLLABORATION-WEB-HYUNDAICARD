import * as styles from "./own-your-header.css";
const OwnYourHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles.title}>Own Your Card</p>
        <p className={styles.subtitle}>Not Just a Card. Your Card.</p>
      </div>
      <p className={styles.description}>
        딱 하나, 지금의 나와 가장 어울리는 카드를 찾아보세요.
      </p>
    </div>
  );
};

export default OwnYourHeader;
