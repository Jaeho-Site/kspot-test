// 콘텐츠 타입 정의
export interface Content {
  contentId: number;
  category: "DRAMA" | "MOVIE" | "KPOP";
  title: string;
  posterImageUrl?: string;
  releaseDate?: string;
  locations?: ContentLocation[];
  artists?: Artist[];
}

export interface ContentLocation {
  locationId: number;
  name: string;
  sceneDescription: string;
}

export interface Artist {
  artistId: number;
  name: string;
  profileImageUrl?: string;
}

// 콘텐츠 목록 조회 필터
export interface ContentFilters {
  category?: "DRAMA" | "MOVIE" | "KPOP";
  search?: string;
  page?: number;
  limit?: number;
}
