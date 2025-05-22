import ChipHover from "@/shared/components/chips/chip-hover/chip-hover";
import Accordion from "./components/accordion/accordion";
import { useTagFilter } from "./hooks/tag-filter";

const My = () => {
  const { tags, toggleTag } = useTagFilter();

  return (
    <div style={{ width: "26.6rem" }}>
      {tags.map((item, categoryIdx) => (
        <Accordion
          key={item.category}
          title={item.category ?? ""}
          tags={item.tags ?? []}
          onTagClick={(tagId: string) => toggleTag(categoryIdx, tagId)}
        />
      ))}
      <ChipHover />
    </div>
  );
};

export default My;
