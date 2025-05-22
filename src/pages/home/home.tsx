import { $api } from "@/shared/apis/config";
import Posts from "./components/posts";

import * as styles from "./home.css";

import { END_POINTS } from "@/shared/apis/end-point";
import OneYourCardContainer from "./own-your-card/own-your-card-container";

const Home = () => {
  const { data: postsData } = $api.useQuery("get", END_POINTS.posts);

  return (
    <>
      <section className={styles.homeContainer}>
        <section className={styles.oneYourCardContainer}>
          <OneYourCardContainer />
        </section>
        <section className={styles.eventCardContainer}>
          <Posts postsData={postsData?.data || []} />
        </section>
      </section>
    </>
  );
};
export default Home;
