import Posts from "./components/posts";
import { Sidebar } from "./components/sidebar/sidebar";
import * as styles from "./home.css";

const Home = () => {
  return (
    <>
      <section className={styles.eventCardContainer}>
      <Posts />
      <Sidebar />
      </section>
    </>
  );
};

export default Home;
