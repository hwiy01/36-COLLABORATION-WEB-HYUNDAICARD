import { $api } from "@/shared/apis/config";
import { END_POINTS } from "@/shared/apis/end-point";
import type { components } from "@/shared/types/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export type TagWithIsSelected = components["schemas"]["TagResponseDto"] & {
  isSelected: boolean;
};

export interface TagCategoryGroupWithIsSelected {
  category?: string;
  tags?: TagWithIsSelected[];
}

export const useTagFilter = () => {
  const [searchParams] = useSearchParams();
  const [tags, setTags] = useState<TagCategoryGroupWithIsSelected[]>([]);
  const { data } = $api.useQuery("get", END_POINTS.tags);
  const tagData = data?.data;

  useEffect(() => {
    if (tagData) {
      const tagsWithSelection = tagData.map((group) => ({
        category: group.category,
        tags: (group.tags ?? []).map((tag) => ({
          ...tag,
          isSelected: false,
        })),
      }));
      setTags(tagsWithSelection);
    }
  }, [tagData]);

  // URL 쿼리 파라미터로부터 선택된 태그 반영
  useEffect(() => {
    const selectedTagIds = searchParams.get("tags")?.split(",") || [];

    if (selectedTagIds.length > 0) {
      setTags((prevTags) =>
        prevTags.map((item) => ({
          ...item,
          tags: (item.tags ?? []).map((tag) => ({
            ...tag,
            isSelected: selectedTagIds.includes(tag.name ?? ""),
          })),
        })),
      );
    }
  }, [searchParams]);

  // 클릭하는 Tag의 id값으로 탐색 후 selected mode로 변경
  const toggleTag = (categoryIndex: number, tagId: string) => {
    setTags((prevTagsState) =>
      prevTagsState.map((category, idx) => {
        if (categoryIndex === idx) {
          return {
            ...category,
            tags: (category.tags ?? []).map((tag) =>
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

  return {
    tags,
    toggleTag,
  };
};
