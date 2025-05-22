import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "@/shared/apis/config";
import { END_POINTS } from "@/shared/apis/end-point";
import type { components } from "@/shared/types/api";
import type { BaseResponse } from "@/shared/types/api-config";

type CardBrandGroupDto = components["schemas"]["CardBrandGroupDto"];

export const useGetCards = () =>
  useSuspenseQuery<CardBrandGroupDto[]>({
    queryKey: ["cards"],
    queryFn: async () => {
      const res = await get<BaseResponse<CardBrandGroupDto[]>>(
        END_POINTS.cards,
      );
      return res.data.data;
    },
  });
