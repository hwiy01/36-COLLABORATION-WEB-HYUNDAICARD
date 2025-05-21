import { get } from "@/shared/apis/config";
import { END_POINTS } from "@/shared/apis/end-point";
import type { components } from "@/shared/types/api";
import type { BaseResponse } from "@/shared/types/api-config";
import { useSuspenseQuery } from "@tanstack/react-query";

type GetCardsResponse = components["schemas"]["CardResponseDto"][];

export const useGetCards = () =>
  useSuspenseQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const response = await get<BaseResponse<GetCardsResponse>>(
        END_POINTS.cards,
      );
      return response.data.data;
    },
  });
