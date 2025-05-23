import SpinCardLottie from "./components/spin-card-lottie";
import OwnYourCard from "../own-your-card/own-your-card";

import * as styles from "./my.css";

const My = () => {
  return (
    <section className={styles.myContainer}>
      <aside style={{ width: "26.6rem" }}>
        <OwnYourCard />
      </aside>
      <div className={styles.lottieContainer}>
        <SpinCardLottie />
      </div>
    </section>
  );
};

export default My;
