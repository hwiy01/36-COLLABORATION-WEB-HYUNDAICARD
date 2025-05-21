import Posts from "./components/posts";
import * as styles from "./home.css";

const Home = () => {
  return (
    <section className={styles.eventCardContainer}>
      <Posts />
    </section>
  );
};

export default Home;
