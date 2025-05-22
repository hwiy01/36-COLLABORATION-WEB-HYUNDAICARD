import Accordion from "./components/accordion/accordion";
import OtherRecommendedCards from "./components/other-recommended-cards/other-recommended-cards";
import { useTagFilter } from "./hooks/tag-filter";

const My = () => {
  const { tags, toggleTag } = useTagFilter();

  return (
    <>
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
      <div style={{ width: "100.0rem", height: "44.2rem" }}>
        <OtherRecommendedCards />
      </div>
    </>
  );
};

export default My;
