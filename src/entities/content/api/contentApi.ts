import { apiClient, API_ENDPOINTS } from "@/shared/api";
import type { ApiResponse, PaginatedResponse } from "@/shared/api";
import type { Content, ContentFilters } from "../model";

// 콘텐츠 목록 조회
export async function getContents(
  filters?: ContentFilters
): Promise<ApiResponse<PaginatedResponse<Content>>> {
  const params = new URLSearchParams();

  if (filters?.category) params.append("category", filters.category);
  if (filters?.search) params.append("search", filters.search);
  if (filters?.page) params.append("page", filters.page.toString());
  if (filters?.limit) params.append("limit", filters.limit.toString());

  return apiClient.get(`${API_ENDPOINTS.CONTENTS}?${params.toString()}`);
}

// 콘텐츠 상세 조회
export async function getContentById(
  id: number
): Promise<ApiResponse<Content>> {
  return apiClient.get(API_ENDPOINTS.CONTENT_DETAIL(id));
}

// 콘텐츠 관련 장소 조회
export async function getContentLocations(id: number) {
  return apiClient.get(API_ENDPOINTS.CONTENT_LOCATIONS(id));
}

// 콘텐츠 출연 아티스트 조회
export async function getContentArtists(id: number) {
  return apiClient.get(API_ENDPOINTS.CONTENT_ARTISTS(id));
}
