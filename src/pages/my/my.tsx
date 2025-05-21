import {
  type TagCategory,
  initialTagCategories,
} from "@/shared/mocks/mock-tags";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Accordion from "./components/accordion/accordion";

const My = () => {
  const [searchParams] = useSearchParams();
  const [tags, setTags] = useState<TagCategory[]>(initialTagCategories);
  // api 연동할 때 response -> Tag type으로 convert 해줘야함!

  useEffect(() => {
    const selectedTagIds = searchParams.get("tags")?.split(",") || [];

    if (selectedTagIds.length > 0) {
      setTags((prevTags) =>
        prevTags.map((category) => ({
          ...category,
          tags: category.tags.map((tag) => ({
            ...tag,
            isSelected: selectedTagIds.includes(tag.id),
          })),
        })),
      );
    }
  }, [searchParams]);

  const toggleTag = (categoryIndex: number, tagId: string) => {
    setTags((prevTagsState) =>
      prevTagsState.map((category, idx) => {
        if (categoryIndex === idx) {
          return {
            ...category,
            tags: category.tags.map((tag) =>
              tag.id === tagId ? { ...tag, isSelected: !tag.isSelected } : tag,
            ),
          };
        }
        return category;
      }),
    );
  };
  return (
    <div style={{ width: "26.6rem" }}>
      {tags.map((item, categoryIdx) => (
        <Accordion
          key={item.category}
          title={item.category}
          tags={item.tags}
          onTagClick={(tagId: string) => toggleTag(categoryIdx, tagId)}
        />
      ))}
    </div>
  );
};

export default My;
