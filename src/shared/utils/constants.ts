// 콘텐츠 카테고리
export const CONTENT_CATEGORIES = {
  DRAMA: "DRAMA",
  MOVIE: "MOVIE",
  KPOP: "KPOP",
} as const;

export const CONTENT_CATEGORY_LABELS = {
  [CONTENT_CATEGORIES.DRAMA]: "K-드라마",
  [CONTENT_CATEGORIES.MOVIE]: "영화",
  [CONTENT_CATEGORIES.KPOP]: "K-POP",
} as const;

// 버튼 variants
export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINE: "outline",
  GHOST: "ghost",
} as const;

// 버튼 사이즈
export const BUTTON_SIZES = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

// 페이지네이션
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
} as const;

// 별점 범위
export const RATING = {
  MIN: 1,
  MAX: 5,
} as const;

// 로컬스토리지 키
export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  USER_INFO: "userInfo",
  THEME: "theme",
  LANGUAGE: "language",
} as const;

// API 관련
export const API = {
  TIMEOUT: 10000,
  RETRY_COUNT: 3,
} as const;

// 지도 관련
export const MAP = {
  DEFAULT_ZOOM: 15,
  DEFAULT_CENTER: {
    lat: 37.5665,
    lng: 126.978,
  },
} as const;
