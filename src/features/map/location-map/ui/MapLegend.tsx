import { MapPin, Camera, Clock, Star, Users, Navigation2 } from "lucide-react";

interface MapLegendProps {
  totalLocations: number;
  averageRating: number;
  estimatedTime: string;
  totalVisitors: string;
}

export function MapLegend({
  totalLocations,
  averageRating,
  estimatedTime,
  totalVisitors,
}: MapLegendProps) {
  const legendItems = [
    {
      icon: <MapPin className="w-4 h-4 text-purple-600" />,
      label: "촬영지 마커",
      description: "오징어 게임 촬영 장소",
    },
    {
      icon: <Camera className="w-4 h-4 text-blue-600" />,
      label: "주요 장면",
      description: "드라마 명장면 촬영지",
    },
    {
      icon: <Navigation2 className="w-4 h-4 text-green-600" />,
      label: "길찾기",
      description: "선택한 위치로 안내",
    },
  ];

  const stats = [
    {
      icon: <MapPin className="w-5 h-5 text-purple-600" />,
      value: totalLocations,
      label: "촬영지",
      suffix: "개",
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      value: averageRating,
      label: "평균 평점",
      suffix: "점",
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      value: estimatedTime,
      label: "권장 시간",
      suffix: "",
    },
    {
      icon: <Users className="w-5 h-5 text-green-600" />,
      value: totalVisitors,
      label: "방문자",
      suffix: "",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          🎬 오징어 게임 촬영지 가이드
        </h3>
        <p className="text-sm text-gray-600">
          전 세계를 사로잡은 K-드라마의 실제 촬영 장소들을 만나보세요
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex justify-center mb-2">{stat.icon}</div>
            <div className="text-lg font-bold text-gray-900">
              {stat.value}
              <span className="text-sm font-normal text-gray-600">
                {stat.suffix}
              </span>
            </div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 text-sm">지도 범례</h4>
        <div className="space-y-2">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
        <h4 className="font-semibold text-purple-900 text-sm mb-2 flex items-center">
          💡 여행 팁
        </h4>
        <ul className="text-xs text-purple-700 space-y-1">
          <li>• 마커를 클릭하면 상세 정보를 볼 수 있습니다</li>
          <li>• 대중교통 이용 시 2-3시간 소요됩니다</li>
          <li>• 주요 촬영지는 사전 예약이 필요할 수 있습니다</li>
          <li>• 사진 촬영 시 다른 관람객을 배려해주세요</li>
        </ul>
      </div>

      {/* Safety Notice */}
      <div className="bg-red-50 rounded-xl p-4 border border-red-100">
        <h4 className="font-semibold text-red-900 text-sm mb-2 flex items-center">
          ⚠️ 안전 안내
        </h4>
        <p className="text-xs text-red-700">
          일부 촬영지는 폐교나 공사 현장입니다. 
          안전을 위해 출입 제한 구역에는 들어가지 마세요.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          문의: K-콘텐츠 여행 서비스
        </p>
        <p className="text-xs text-gray-400">
          📧 info@k-travel.co.kr | 📞 1588-0000
        </p>
      </div>
    </div>
  );
}
