import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Download, RotateCcw } from "lucide-react";
import { KakaoMap, LocationSidebar, MapLegend } from "@/features/map/location-map";

// 오징어 게임 촬영지 데이터
const squidGameLocations = [
  {
    id: 1,
    name: "대한봉진학교",
    address: "경기도 안산시 상록구",
    description:
      "오징어 게임의 주요 촬영지로 사용된 폐교. 게임이 진행되는 기숙사와 운동장 장면이 촬영되었습니다.",
    image: "/assets/squidgame-spotdetail.jpg",
    rating: 4.8,
    visitTime: "1-2시간",
    sceneDescription:
      "참가자들이 머무는 기숙사와 각종 게임이 진행되는 메인 무대",
    coordinates: { lat: 37.3041, lng: 126.8706 },
    tags: ["메인 촬영지", "폐교", "기숙사", "게임장"],
  },
  {
    id: 2,
    name: "무인도 세트장",
    address: "인천광역시 중구",
    description:
      "드라마 속 무인도를 재현한 세트장. 마지막 게임인 오징어 게임이 펼쳐진 장소입니다.",
    image: "/assets/squidgame-spotdetail2.jpg",
    rating: 4.6,
    visitTime: "30분",
    sceneDescription: "마지막 오징어 게임과 클라이맥스 장면이 촬영된 곳",
    coordinates: { lat: 37.4449, lng: 126.6422 },
    tags: ["오징어게임", "마지막게임", "세트장", "클라이맥스"],
  },
  {
    id: 3,
    name: "강남역 지하보도",
    address: "서울특별시 강남구",
    description:
      "주인공 기훈이 첫 번째 게임에 참여하게 되는 계기가 된 장소. 딱지치기 게임 장면이 촬영되었습니다.",
    image: "/assets/squidgame-spotdetail3.png",
    rating: 4.4,
    visitTime: "20분",
    sceneDescription: "정장 남자와의 딱지치기 게임으로 모든 것이 시작된 곳",
    coordinates: { lat: 37.4979, lng: 127.0276 },
    tags: ["딱지치기", "시작점", "지하보도", "모집"],
  },
  {
    id: 4,
    name: "을왕리해수욕장",
    address: "인천광역시 중구",
    description:
      "드라마 초반 가족 나들이 회상 장면과 일부 외부 장면이 촬영된 해수욕장입니다.",
    image: "/assets/squidgame-spotdetail4.png",
    rating: 4.5,
    visitTime: "1시간",
    sceneDescription: "가족과의 행복했던 추억을 회상하는 장면",
    coordinates: { lat: 37.4486, lng: 126.3741 },
    tags: ["해수욕장", "회상장면", "가족", "추억"],
  },
];

export function MapPage() {
  const navigate = useNavigate();
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleLocationSelect = (location: any) => {
    setSelectedLocationId(location.id);
  };

  const handleGetDirections = (location: any) => {
    // 카카오맵 길찾기 연결
    const kakaoMapUrl = `https://map.kakao.com/link/to/${encodeURIComponent(
      location.name
    )},${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(kakaoMapUrl, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "오징어 게임 촬영지 지도",
        text: "전 세계를 사로잡은 오징어 게임의 실제 촬영지를 만나보세요!",
        url: window.location.href,
      });
    }
  };

  const handleDownload = () => {
    // 지도 이미지 다운로드 로직 (실제 구현시 html2canvas 등 사용)
    alert("지도 이미지 다운로드 기능은 추후 구현됩니다.");
  };

  const handleReset = () => {
    setSelectedLocationId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  🎬 오징어 게임 촬영지 지도
                </h1>
                <p className="text-sm text-gray-600">
                  {squidGameLocations.length}개의 촬영지를 탐험해보세요
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors lg:hidden"
              >
                {showSidebar ? "지도 확대" : "목록 보기"}
              </button>
              <button
                onClick={handleReset}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="초기화"
              >
                <RotateCcw className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="공유하기"
              >
                <Share2 className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={handleDownload}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="지도 다운로드"
              >
                <Download className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        {showSidebar && (
          <div className="w-full lg:w-96 lg:flex-shrink-0 border-r border-gray-200 overflow-hidden">
            <LocationSidebar
              locations={squidGameLocations}
              selectedLocationId={selectedLocationId}
              onLocationSelect={handleLocationSelect}
              onGetDirections={handleGetDirections}
            />
          </div>
        )}

        {/* Map Container */}
        <div className="flex-1 relative">
          <KakaoMap
            locations={squidGameLocations}
            onLocationSelect={handleLocationSelect}
            selectedLocationId={selectedLocationId}
          />

          {/* Legend - 데스크톱에서만 표시 */}
          <div className="hidden xl:block absolute bottom-6 left-6 w-80">
            <MapLegend
              totalLocations={squidGameLocations.length}
              averageRating={4.6}
              estimatedTime="2-3시간"
              totalVisitors="142M"
            />
          </div>

          {/* Mobile Legend Button */}
          <div className="xl:hidden absolute bottom-6 right-6">
            <button
              onClick={() => {
                // 모바일에서 범례 모달 열기
                alert("범례 정보:\n• 📍 4개 촬영지\n• ⭐ 평균 4.6점\n• ⏱️ 2-3시간 소요");
              }}
              className="p-3 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-colors"
              title="범례 보기"
            >
              ℹ️
            </button>
          </div>

          {/* Loading Overlay */}
          {!window.kakao && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-gray-600">카카오 맵을 불러오는 중...</p>
                <p className="text-sm text-gray-500 mt-1">
                  API 키가 필요합니다
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
