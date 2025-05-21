import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { components } from "../../shared/types/api.d";
import Accordion from "./components/accordion/accordion";
import { useGetTags } from "./hooks/get-tags";

export type TagWithIsSelected = components["schemas"]["TagResponseDto"] & {
  isSelected: boolean;
};

export interface TagCategoryGroupWithIsSelected {
  category?: string;
  tags?: TagWithIsSelected[];
}

const My = () => {
  const [searchParams] = useSearchParams();
  const [tags, setTags] = useState<TagCategoryGroupWithIsSelected[]>([]);

  const { data: tagData } = useGetTags();

  useEffect(() => {
    if (tagData) {
      const tagsWithSelection = tagData.map((group) => ({
        category: group.category,
        tags: group.tags?.map((tag) => ({
          ...tag,
          isSelected: false,
        })),
      }));
      setTags(tagsWithSelection);
    }
  }, [tagData]);

  useEffect(() => {
    const selectedTagIds = searchParams.get("tags")?.split(",") || [];

    if (selectedTagIds.length > 0) {
      setTags((prevTags) =>
        prevTags.map((item) => ({
          ...item,
          tags: item.tags.map((tag) => ({
            ...tag,
            isSelected: selectedTagIds.includes(tag.name),
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
              tag.tagId === tagId
                ? { ...tag, isSelected: !tag.isSelected }
                : tag,
            ),
          };
        }
        return category;
      }),
    );
  };
  return (
    <div style={{ width: "26.6rem" }}>
      {!tagData && <div>ㄴ</div>}
      {tags.map((item, categoryIdx) => (
        <Accordion
          key={item?.category}
          title={item?.category}
          tags={item?.tags}
          onTagClick={(tagId: string) => toggleTag(categoryIdx, tagId)}
        />
      ))}
    </div>
  );
};

export default My;
