import { get } from "@/shared/apis/config";
import { END_POINTS } from "@/shared/apis/end-point";
import type { components } from "@/shared/types/api";
import type { BaseResponse } from "@/shared/types/api-config";
import { useSuspenseQuery } from "@tanstack/react-query";

type GetPostsResponse = components["schemas"]["PostResponseDto"][];

export const useGetPosts = () =>
  useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await get<BaseResponse<GetPostsResponse>>(
        END_POINTS.posts,
      );
      return response.data.data;
    },
  });
