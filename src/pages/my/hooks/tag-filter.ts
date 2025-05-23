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
  const [searchParams, setSearchParams] = useSearchParams();
  const [tags, setTags] = useState<TagCategoryGroupWithIsSelected[]>([]);
  const { data } = $api.useQuery("get", END_POINTS.tags);
  const [isInitialized, setIsInitialized] = useState(false);
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
      setIsInitialized(true);
    }
  }, [tagData]);

  // URL 쿼리 파라미터로부터 선택된 태그 반영
  useEffect(() => {
    if (!isInitialized) {
      return;
    }

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
  }, [searchParams, isInitialized]);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    const selectedTagNames: string[] = [];

    for (const category of tags) {
      if (category.tags) {
        for (const tag of category.tags) {
          if (tag.isSelected && tag.name) {
            selectedTagNames.push(tag.name);
          }
        }
      }
    }

    const newSearchParams = new URLSearchParams(searchParams);
    if (selectedTagNames.length > 0) {
      newSearchParams.set("tags", selectedTagNames.join(","));
    } else {
      newSearchParams.delete("tags");
    }
    setSearchParams(newSearchParams, { replace: true });
  }, [tags, isInitialized, searchParams, setSearchParams]);

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

  const resetTagSelected = () => {
    setTags((prevTagState) =>
      prevTagState.map((category) => ({
        ...category,
        tags: (category.tags ?? []).map((tag) => ({
          ...tag,
          isSelected: false,
        })),
      })),
    );
  };
  return {
    tags,
    toggleTag,
    resetTagSelected,
  };
};
