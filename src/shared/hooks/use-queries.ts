import { useMutation, useQuery } from "@tanstack/react-query";
import { cardApis, mainApis, tagApis } from "../apis/service";

export const useGetMainPost = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: mainApis.getMainPost,
  });
};

export const useGetTagList = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: tagApis.getAllTags,
  });
};

export const useGetMainCard = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: mainApis.getMainCard,
  });
};

export const useSearchCard = () => {
  return useMutation({
    mutationFn: (cardSearchList) => {
      return cardApis.searchCard(cardSearchList);
    },
    onError: (error) => {
      console.error("Card search error:", error);
    },
  });
};
