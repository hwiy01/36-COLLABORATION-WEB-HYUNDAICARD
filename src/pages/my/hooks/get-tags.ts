import { get } from "@/shared/apis/config";
import { END_POINTS } from "@/shared/apis/end-point";
import type { components } from "@/shared/types/api";
import type { BaseResponse } from "@/shared/types/api-config";
import { useSuspenseQuery } from "@tanstack/react-query";

export type GetTagsResponse = components["schemas"]["TagCategoryGroupDto"][];

export const useGetTags = () => {
  return useSuspenseQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await get<BaseResponse<GetTagsResponse>>(
        END_POINTS.tags,
      );
      return response.data.data;
    },
  });
};
