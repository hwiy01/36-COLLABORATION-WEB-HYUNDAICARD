import { $api } from "@/shared/apis/config";
import Posts from "./components/posts";

import * as styles from "./home.css";

import { END_POINTS } from "@/shared/apis/end-point";
import OneYourCardContainer from "./components/own-your-card-container";
import Cards from "./components/cards";

const Home = () => {
  const { data: postsData } = $api.useQuery("get", END_POINTS.posts);
  const { data: cardsData } = $api.useQuery("get", END_POINTS.cards);

  return (
    <>
      <section className={styles.homeContainer}>
        <div className={styles.oneYourCardContainer}>
          <OneYourCardContainer />
        </div>
        <div className={styles.eventCardContainer}>
          <Cards cardsData={cardsData?.data || []} />
        </div>
        <div className={styles.eventCardContainer}>
          <Posts postsData={postsData?.data || []} />
        </div>
      </section>
    </>
  );
};
export default Home;
