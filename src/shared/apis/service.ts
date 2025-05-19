import apiRequest from "./axios-instance";

// 메인페이지 - 게시글 리스트 API
export const mainApis = {
  getMainPost: async () => {
    const response = await apiRequest.get("/api/v1/posts");
    return response.data.data;
  },
  getMainCard: async () => {
    const response = await apiRequest.get("/api/v1/cards");
    return response.data.data;
  },
};

// 카드 검색 페이지(내게 맞는 카드 찾기) - 태그 리스트 API
export const tagApis = {
  getAllTags: async () => {
    const response = await apiRequest.get("/api/v1/tags");
    return response.data.data;
  },
};

// 카드 검색 api
export const cardApis = {
  searchCard: async (cardSearchList: unknown) => {
    const response = await apiRequest.post(
      "/api/v1/cards/search",
      cardSearchList,
    );
    return response.data;
  },
};
