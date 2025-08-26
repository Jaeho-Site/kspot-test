// API 엔드포인트 상수
export const API_ENDPOINTS = {
  // 콘텐츠
  CONTENTS: "/contents",
  CONTENT_DETAIL: (id: number) => `/contents/${id}`,
  CONTENT_LOCATIONS: (id: number) => `/contents/${id}/locations`,
  CONTENT_ARTISTS: (id: number) => `/contents/${id}/artists`,

  // 장소
  LOCATIONS: "/locations",
  LOCATION_DETAIL: (id: number) => `/locations/${id}`,
  LOCATION_REVIEWS: (id: number) => `/locations/${id}/reviews`,

  // 아티스트
  ARTISTS: "/artists",
  ARTIST_DETAIL: (id: number) => `/artists/${id}`,

  // 사용자
  USERS: "/users",
  USER_DETAIL: (id: number) => `/users/${id}`,
  USER_ME: "/users/me",
  USER_LOCATIONS: (id: number) => `/users/${id}/locations`,
  USER_ITINERARIES: (id: number) => `/users/${id}/itineraries`,

  // 인증
  AUTH_SIGNUP: "/auth/signup",
  AUTH_LOGIN: "/auth/login",
  AUTH_LOGOUT: "/auth/logout",

  // 리뷰
  REVIEWS: "/reviews",
  REVIEW_DETAIL: (id: number) => `/reviews/${id}`,

  // 여행 계획
  ITINERARIES: "/itineraries",
  ITINERARY_DETAIL: (id: number) => `/itineraries/${id}`,
  ITINERARY_LOCATIONS: (id: number) => `/itineraries/${id}/locations`,
} as const;
