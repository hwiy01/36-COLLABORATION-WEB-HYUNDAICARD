import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "../apis/config";
import type { paths } from "../types/api";
import type { HttpMethod } from "openapi-typescript-helpers";
import type { PathsWithMethod } from "openapi-typescript-helpers";
import type { FetchOptions } from "openapi-fetch";
import type {
  UseMutationOptions as RQUseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

type UseMutationOptions = Pick<RQUseMutationOptions, "retry">;
type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>;
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P]
  ? FetchOptions<paths[P][M]>
  : never;

export function usePostMutation<P extends Paths<"post">>(
  path: P,
  options?: UseMutationOptions,
) {
  return useMutation({
    mutationFn: async (params: Params<"post", P>) => {
      const { data, error } = await client.POST(path, params);
      if (error) throw error;
      return data;
    },
    ...options,
  });
}

export function useGetQuery<P extends Paths<"get">>(
  path: P,
  params: Params<"get", P> & { rq?: UseQueryOptions },
) {
  return useQuery({
    queryKey: [path, params],
    queryFn: async () => {
      const { data, error } = await client.GET(path, params);
      if (error) throw error;
      return data;
    },
    ...params?.rq,
  });
}
