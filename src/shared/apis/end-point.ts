import type { paths } from "@/shared/types/api";

/**
 * paths에 정의된 API endpoint만 입력 가능하도록 제한하는 함수
 * 오타나 잘못된 경로 입력을 방지할 수 있음
 */
const createEndpoint = <T extends keyof paths>(endpoint: T): T => endpoint;

export const END_POINTS = {
  tags: createEndpoint("/api/v1/tags"),
  cards: createEndpoint("/api/v1/cards"),
  search: createEndpoint("/api/v1/cards/search"),
  posts: createEndpoint("/api/v1/posts"),
};
