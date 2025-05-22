import Accordion from "./components/accordion/accordion";
import SpinCardLottie from "./components/spin-card-lottie";
import { useTagFilter } from "./hooks/tag-filter";

const My = () => {
  const { tags, toggleTag } = useTagFilter();

  return (
    <div style={{ display: "flex" }}>
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
      <SpinCardLottie></SpinCardLottie>
    </div>
  );
};

export default My;
