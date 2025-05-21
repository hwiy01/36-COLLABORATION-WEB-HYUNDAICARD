import Posts from "./components/posts";
import OneYourCardContainer from "./one-your-card/one-your-card-container";

import * as styles from "./home.css";

const Home = () => {
  return (
    <>
      <section className={styles.oneYourCardContainer}>
        <OneYourCardContainer />
      </section>
      <section className={styles.eventCardContainer}>
        <Posts />
      </section>
    </>
  );
};

export default Home;
