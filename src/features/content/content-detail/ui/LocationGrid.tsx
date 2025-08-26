import { useState } from "react";
import { MapPin, Navigation, Camera, Clock, Star, Heart } from "lucide-react";
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

interface LocationGridProps {
  locations: Location[];
  onLocationSelect?: (location: Location) => void;
  onMapView?: () => void;
}

export function LocationGrid({
  locations,
  onLocationSelect,
  onMapView,
}: LocationGridProps) {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [likedLocations, setLikedLocations] = useState<Set<number>>(new Set());

  const toggleLike = (locationId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLiked = new Set(likedLocations);
    if (newLiked.has(locationId)) {
      newLiked.delete(locationId);
    } else {
      newLiked.add(locationId);
    }
    setLikedLocations(newLiked);
  };

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location.id);
    onLocationSelect?.(location);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              촬영지 탐방
            </h2>
            <p className="text-lg text-gray-600">
              오징어 게임의 명장면들이 탄생한 실제 촬영지를 만나보세요
            </p>
          </div>

          <button
            onClick={onMapView}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors"
          >
            <Navigation className="w-5 h-5" />
            <span>지도에서 보기</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {locations.length}
            </div>
            <div className="text-gray-600">총 촬영지</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">주요 장면</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
            <div className="text-gray-600">평균 평점</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              2-3시간
            </div>
            <div className="text-gray-600">권장 관람</div>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              onClick={() => handleLocationClick(location)}
              className={`group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                selectedLocation === location.id
                  ? "ring-2 ring-purple-500 scale-105"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Location Number */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(location.id, e)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      likedLocations.has(location.id)
                        ? "text-red-500 fill-red-500"
                        : "text-white"
                    }`}
                  />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{location.rating}</span>
                </div>

                {/* Visit Time */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{location.visitTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {location.name}
                </h3>

                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{location.address}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {location.description}
                </p>

                {/* Scene Description */}
                <div className="p-3 bg-purple-50 rounded-xl mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Camera className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-700">
                      촬영 장면
                    </span>
                  </div>
                  <p className="text-sm text-purple-600">
                    {location.sceneDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300">
                  상세 정보 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full transition-colors">
            더 많은 촬영지 보기
          </button>
        </div>
      </div>
    </section>
  );
}
