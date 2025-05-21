import type { paths } from "@/shared/types/api";

const createEndpoint = <T extends keyof paths>(endpoint: T): T => endpoint;

export const API_ENDPOINTS = {
  tags: createEndpoint("/api/v1/tags"),
  cards: createEndpoint("/api/v1/cards"),
  search: createEndpoint("/api/v1/cards/search"),
  posts: createEndpoint("/api/v1/posts"),
};
