import { useGetQuery } from "@/shared/hooks/hooks";
import Posts from "./components/posts";
import * as styles from "./home.css";
import { END_POINTS } from "@/shared/apis/end-point";

const Home = () => {
  const postsData = useGetQuery(END_POINTS.posts, {
    method: "GET",
  });

  console.log("postsData", postsData.data);

  return (
    <section className={styles.eventCardContainer}>
      <Posts />
    </section>
  );
};

export default Home;
