// 장소 타입 정의
export interface Location {
  locationId: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  description?: string;
  relatedContents?: RelatedContent[];
  reviews?: LocationReviews;
}

export interface RelatedContent {
  contentId: number;
  title: string;
  category: "DRAMA" | "MOVIE" | "KPOP";
  sceneDescription?: string;
}

export interface LocationReviews {
  averageRating: number;
  reviewCount: number;
  items: Review[];
}

export interface Review {
  reviewId: number;
  user: {
    userId: number;
    nickname: string;
  };
  rating: number;
  content: string;
  createdAt: string;
}

// 좌표
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// 장소 필터
export interface LocationFilters {
  search?: string;
  contentId?: number;
  page?: number;
  limit?: number;
}
