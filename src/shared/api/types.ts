// 공통 API 응답 타입
export interface ApiResponse<T = any> {
  status: number;
  message: string;
  data?: T;
  code?: string;
}

// 페이지네이션 정보
export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

// 페이지네이션이 포함된 응답
export interface PaginatedResponse<T> {
  items: T[];
  pagination: Pagination;
}

// API 에러 타입
export interface ApiError {
  status: number;
  message: string;
  code?: string;
}
