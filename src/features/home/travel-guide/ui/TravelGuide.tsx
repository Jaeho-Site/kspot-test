import {
  MapPin,
  Utensils,
  Camera,
  Users,
  ArrowRight,
  Phone,
  Globe,
} from "lucide-react";

const TRAVEL_TIPS = [
  {
    id: 1,
    category: "미식여행",
    title: "부산 대표 먹거리 투어",
    icon: Utensils,
    color: "from-red-500 to-orange-500",
    items: [
      {
        name: "밀면",
        location: "부산 전역",
        description: "부산의 대표 면요리, 시원하고 담백한 맛",
      },
      {
        name: "씨앗호떡",
        location: "BIFF광장",
        description: "바삭한 겉면과 달콤한 속이 일품인 부산 명물",
      },
      {
        name: "돼지국밥",
        location: "서면, 남포동",
        description: "진한 국물과 부드러운 고기가 어우러진 부산의 소울푸드",
      },
    ],
  },
  {
    id: 2,
    category: "포토스팟",
    title: "인스타그램 핫플레이스",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    items: [
      {
        name: "감천문화마을",
        location: "사하구 감천동",
        description: "알록달록한 집들이 층층이 쌓인 부산의 마추픽추",
      },
      {
        name: "해동 용궁사",
        location: "기장군",
        description: "바다 위에 세워진 아름다운 사찰, 일출 명소",
      },
      {
        name: "흰여울문화마을",
        location: "영도구",
        description: "하얀 집들과 바다 전망이 어우러진 예술 마을",
      },
    ],
  },
  {
    id: 3,
    category: "체험활동",
    title: "부산에서만 할 수 있는 특별한 경험",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        name: "서핑체험",
        location: "송정해수욕장",
        description: "부산의 대표 서핑 스팟에서 즐기는 수상 스포츠",
      },
      {
        name: "템플스테이",
        location: "해동 용궁사",
        description: "바다를 바라보며 명상하는 특별한 힐링 체험",
      },
      {
        name: "야시장 투어",
        location: "부평깡통야시장",
        description: "대한민국 최초 야간 먹방 테마파크에서의 미식 여행",
      },
    ],
  },
];

const QUICK_INFO = [
  {
    icon: Phone,
    title: "관광 문의",
    content: "1330 (관광안내전화)",
    description: "24시간 다국어 관광 안내 서비스",
  },
  {
    icon: MapPin,
    title: "관광안내소",
    content: "부산역, 김해공항, 해운대",
    description: "주요 거점에 위치한 관광안내소",
  },
  {
    icon: Users,
    title: "문화관광해설사",
    content: "무료 해설 서비스",
    description: "전문가와 함께하는 심화 여행",
  },
  {
    icon: Globe,
    title: "언어 지원",
    content: "한/영/중/일",
    description: "다국어 관광 정보 제공",
  },
];

export function TravelGuide() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-700 font-medium mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            K-콘텐츠 여행 가이드
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            완벽한 K-콘텐츠 여행을 위한
            <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              여행 준비 정보
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            촬영지 방문부터 현지 맛집, 포토스팟까지. K-콘텐츠 팬들을 위한 완벽한
            한국 여행 가이드를 제공합니다.
          </p>
        </div>

        {/* Travel Tips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {TRAVEL_TIPS.map((tip) => {
            const IconComponent = tip.icon;

            return (
              <div
                key={tip.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${tip.color}`}>
                  <div className="flex items-center space-x-3 text-white">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">
                        {tip.category}
                      </p>
                      <h3 className="text-xl font-bold">{tip.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {tip.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors duration-300 cursor-pointer group-hover:scale-105 transform transition-transform"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h4>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs">{item.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}

                  <button
                    className={`w-full mt-4 py-3 bg-gradient-to-r ${tip.color} hover:opacity-90 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span>상세 정보 보기</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Info Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              여행 필수 정보
            </h3>
            <p className="text-gray-600">
              K-콘텐츠 여행을 더욱 편리하게 도와줄 유용한 정보들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_INFO.map((info, index) => {
              const IconComponent = info.icon;

              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h4>
                  <p className="text-green-600 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              지금 바로 K-콘텐츠 여행을 계획해보세요!
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              여러분이 사랑하는 드라마, 영화, K-POP 촬영지를 직접 방문하고
              특별한 추억을 만들어보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
                여행 계획 세우기
              </button>
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors border border-white/20">
                가이드북 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
