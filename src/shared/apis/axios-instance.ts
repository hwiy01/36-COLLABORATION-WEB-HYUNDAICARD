import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  timeout: 10000, // 몇으로 설정할까요오..
});

export default apiRequest;
