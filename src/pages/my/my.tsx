import Accordion from "./components/accordion/accordion";
import SpinCardLottie from "./components/spin-card-lottie";
import { useTagFilter } from "./hooks/tag-filter";

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
      <div className={styles.lottieContainer}>
        <SpinCardLottie />
      </div>
    </section>
  );
};

export default My;
