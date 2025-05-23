import Accordion from "./components/accordion/accordion";
import { OtherRecommendation } from "./components/card-recommendation/other-recommendation/other-recommendation";
import { RecommendationDescription } from "./components/card-recommendation/recommendation-description/recommendation-description";
import { useTagFilter } from "./hooks/tag-filter";
import { container, SectionContainer } from "./my.css";

const My = () => {
  const { tags, toggleTag } = useTagFilter();
  return (
    <div className={container}>
      <div style={{ width: "26.6rem" }}>
        {tags.map((item, categoryIdx) => (
          <Accordion
            key={item.category}
            title={item.category ?? ""}
            tags={item.tags ?? []}
            onTagClick={(tagId: string) => toggleTag(categoryIdx, tagId)}
          />
        ))}
      </div>
      <section className={SectionContainer}>
        <RecommendationDescription />
        <OtherRecommendation />
      </section>
    </div>
  );
};

export default My;
