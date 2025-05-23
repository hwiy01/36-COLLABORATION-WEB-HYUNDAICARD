import Accordion from "./components/accordion/accordion";
import CardRecommendation from "./components/card-recommendation/card-recommendation";
import MainCard from "./components/card-recommendation/main-card/main-card";
import { OtherRecommendation } from "./components/card-recommendation/other-recommendation/other-recommendation";
import { RecommendationDescription } from "./components/card-recommendation/recommendation-description/recommendation-description";
import SpinCardLottie from "./components/spin-card-lottie";
import { useTagFilter } from "./hooks/tag-filter";
import { myContainer, lottieContainer } from "./my.css";

import * as styles from "./my.css";

const My = () => {
  const { tags, toggleTag } = useTagFilter();
  return (
    <section className={styles.myContainer}>
      <aside style={{ width: "26.6rem" }}>
        {tags.map((item, categoryIdx) => (
          <Accordion
            key={item.category}
            title={item.category ?? ""}
            tags={item.tags ?? []}
            onTagClick={(tagId: string) => toggleTag(categoryIdx, tagId)}
          />
        ))}
      </aside>
      {/* <div className={styles.lottieContainer}>
        <SpinCardLottie />
      </div> */}
      <main>
        <RecommendationDescription />
        <OtherRecommendation />
      </main>
    </section>
  );
};

export default My;
