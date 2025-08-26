import axios from "axios";
import type { ApiError } from "./types";

// Axios 인스턴스 생성
export const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    // 토큰이 있으면 헤더에 추가
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const apiError: ApiError = {
      status: error.response?.status || 500,
      message: error.response?.data?.message || "서버 오류가 발생했습니다.",
      code: error.response?.data?.code,
    };

    // 401 오류시 토큰 제거 및 로그인 페이지로 리다이렉트
    if (apiError.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }

    return Promise.reject(apiError);
  }
);
