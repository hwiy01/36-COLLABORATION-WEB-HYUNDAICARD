import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiRequest.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiRequest;
