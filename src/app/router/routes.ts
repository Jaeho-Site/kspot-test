// 라우트 경로 상수
export const ROUTES = {
  HOME: "/",
  CONTENT_DETAIL: "/content/:id",
  MAP: "/map",
  SAVED: "/saved",
  PROFILE: "/profile",
} as const;

// 라우트 생성 헬퍼
export const createRoute = {
  contentDetail: (id: number) => `/content/${id}`,
};
