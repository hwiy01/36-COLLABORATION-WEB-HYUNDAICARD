import apiRequest from "./axios-instance";

// 메인페이지 - 게시글 리스트 API
export const mainApis = {
  getMainPost: async () => {
    const response = await apiRequest.get("/api/v1/posts");
    return response.data.data;
  },
};

// 카드 검색 페이지 - 태그 리스트 API
export const tagApis = {
  getAllTags: async () => {
    const response = await apiRequest.get("/api/v1/tags");
    return response.data.data;
  },
};

// 카드 API
export const cardApis = {
  // 카드 리스트
  getCardList: async () => {
    const response = await apiRequest.get("/api/v1/card");
    return response.data.data;
  },

  // 카드 검색
  searchCard: async (cardSearchList: unknown) => {
    const response = await apiRequest.post(
      "/api/v1/card/search",
      cardSearchList,
    );
    return response.data;
  },
};
