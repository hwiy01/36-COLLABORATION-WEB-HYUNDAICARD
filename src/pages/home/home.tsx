import Posts from "./components/posts";
import * as styles from "./home.css";
import Cards from "./components/cards";

const Home = () => {
  return (
    <>
      <section className={styles.eventCardContainer}>
        <Cards />
      </section>
      <section className={styles.eventCardContainer}>
        <Posts />
      </section>
    </>
  );
};

export default Home;
