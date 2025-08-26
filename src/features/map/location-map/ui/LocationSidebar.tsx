import { useState } from "react";
import { MapPin, Star, Clock, Camera, Navigation, Filter } from "lucide-react";
import { OptimizedImage } from "@/shared/ui";

interface Location {
  id: number;
  name: string;
  address: string;
  description: string;
  image: string;
  rating: number;
  visitTime: string;
  sceneDescription: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  tags: string[];
}

interface LocationSidebarProps {
  locations: Location[];
  selectedLocationId?: number;
  onLocationSelect: (location: Location) => void;
  onGetDirections?: (location: Location) => void;
}

export function LocationSidebar({
  locations,
  selectedLocationId,
  onLocationSelect,
  onGetDirections,
}: LocationSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTag, setFilterTag] = useState<string | null>(null);

  // 모든 태그 추출
  const allTags = Array.from(
    new Set(locations.flatMap((location) => location.tags))
  );

  // 필터링된 위치들
  const filteredLocations = locations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = !filterTag || location.tags.includes(filterTag);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full lg:w-96 bg-white shadow-xl rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <h2 className="text-xl font-bold mb-2">오징어 게임 촬영지</h2>
        <p className="text-purple-100 text-sm">
          {filteredLocations.length}개의 촬영지를 찾았습니다
        </p>
      </div>

      {/* Search & Filter */}
      <div className="p-4 border-b border-gray-200">
        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="촬영지 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
          />
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterTag(null)}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              !filterTag
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            전체
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(filterTag === tag ? null : tag)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filterTag === tag
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Location List */}
      <div className="flex-1 overflow-y-auto max-h-96 lg:max-h-[calc(100vh-400px)]">
        {filteredLocations.map((location, index) => (
          <div
            key={location.id}
            onClick={() => onLocationSelect(location)}
            className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-gray-50 ${
              selectedLocationId === location.id
                ? "bg-purple-50 border-l-4 border-l-purple-600"
                : ""
            }`}
          >
            <div className="flex space-x-4">
              {/* Image */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <OptimizedImage
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                {/* Location Number */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1 truncate">
                  {location.name}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{location.address}</span>
                </div>

                {/* Scene Description */}
                <div className="bg-purple-50 rounded-lg p-2 mb-2">
                  <div className="flex items-center space-x-1 mb-1">
                    <Camera className="w-3 h-3 text-purple-600" />
                    <span className="text-xs font-medium text-purple-700">촬영 장면</span>
                  </div>
                  <p className="text-xs text-purple-600 line-clamp-2">
                    {location.sceneDescription}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{location.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{location.visitTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {location.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {location.tags.length > 2 && (
                    <span className="text-xs text-gray-400">
                      +{location.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {selectedLocationId === location.id && (
              <div className="mt-3 pt-3 border-t border-purple-100">
                <div className="flex space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onGetDirections?.(location);
                    }}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>길찾기</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // 상세 정보 보기 로직
                    }}
                    className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                  >
                    상세보기
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {filteredLocations.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <Filter className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm">검색 결과가 없습니다</p>
            <p className="text-xs text-gray-400 mt-1">
              다른 검색어를 시도해보세요
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">
            🎬 오징어 게임 촬영지 탐방
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
            <span>📍 {locations.length}개 장소</span>
            <span>⭐ 평균 4.6점</span>
            <span>⏱️ 2-3시간</span>
          </div>
        </div>
      </div>
    </div>
  );
}
