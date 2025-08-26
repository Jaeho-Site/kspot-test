import { useState } from "react";
import { MapPin, Camera, Users, Star, ArrowRight, Waves } from "lucide-react";

const BUSAN_CONTENTS = [
  {
    id: 1,
    title: "신과함께",
    type: "K-Movie",
    image: "/assets/k-movie-withGod-horizontal.jpg",
    locations: [
      {
        name: "해운대해수욕장",
        description: "영화 속 환상적인 바다 장면이 촬영된 부산의 대표 해변",
        features: ["서핑", "해변산책", "일출명소"],
        rating: 4.8,
      },
      {
        name: "감천문화마을",
        description: "알록달록한 집들이 펼쳐진 부산의 마chu픽추",
        features: ["포토스팟", "예술체험", "전망대"],
        rating: 4.6,
      },
      {
        name: "광안대교",
        description: "부산의 랜드마크, 영화 속 드라마틱한 야경 촬영지",
        features: ["야경명소", "드라이브", "카페거리"],
        rating: 4.9,
      },
    ],
  },
  {
    id: 2,
    title: "범죄도시",
    type: "K-Movie",
    image: "/assets/k-movie-withGod-horizontal.jpg", // 임시로 같은 이미지 사용
    locations: [
      {
        name: "국제시장",
        description: "부산의 역사와 정취가 살아있는 전통 시장",
        features: ["전통시장", "부산먹거리", "역사체험"],
        rating: 4.5,
      },
      {
        name: "자갈치시장",
        description: "싱싱한 해산물과 부산 사투리가 살아있는 곳",
        features: ["해산물", "회센터", "부산항"],
        rating: 4.7,
      },
    ],
  },
];

const BUSAN_FEATURES = [
  {
    icon: Waves,
    title: "해양도시 부산",
    description: "바다와 함께하는 K-콘텐츠 여행",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Camera,
    title: "영화의 도시",
    description: "부산국제영화제의 본고장",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "문화관광해설사",
    description: "전문가와 함께하는 심화 투어",
    color: "from-green-500 to-emerald-500",
  },
];

export function BusanSpotlight() {
  const [selectedContent, setSelectedContent] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(0);

  const currentContent = BUSAN_CONTENTS[selectedContent];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 font-medium mb-6">
            <Waves className="w-5 h-5 mr-2" />
            부산 K-콘텐츠 특집
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            바다의 도시 부산에서 만나는
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              K-콘텐츠 촬영지
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            부산국제영화제의 본고장에서 펼쳐지는 K-콘텐츠의 무대를 직접
            경험해보세요. 해운대부터 감천문화마을까지, 영화 속 그 장소에서
            특별한 추억을 만들어보세요.
          </p>
        </div>

        {/* Content Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 p-2 bg-white rounded-2xl shadow-lg">
            {BUSAN_CONTENTS.map((content, index) => (
              <button
                key={content.id}
                onClick={() => {
                  setSelectedContent(index);
                  setSelectedLocation(0);
                }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedContent === index
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {content.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              {currentContent.locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedLocation(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedLocation === index
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl scale-105"
                      : "bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          selectedLocation === index
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {location.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin
                          className={`w-4 h-4 ${
                            selectedLocation === index
                              ? "text-white"
                              : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            selectedLocation === index
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        >
                          부산광역시
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star
                          className={`w-4 h-4 ${
                            selectedLocation === index
                              ? "text-yellow-300"
                              : "text-yellow-500"
                          } fill-current`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            selectedLocation === index
                              ? "text-white"
                              : "text-gray-700"
                          }`}
                        >
                          {location.rating}
                        </span>
                      </div>
                    </div>
                    {selectedLocation === index && (
                      <ArrowRight className="w-5 h-5 text-white" />
                    )}
                  </div>

                  <p
                    className={`mb-4 ${
                      selectedLocation === index
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {location.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          selectedLocation === index
                            ? "bg-white/20 text-white"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              부산 K-콘텐츠 투어 시작하기
            </button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={currentContent.image}
                alt={currentContent.title}
                className="w-full h-96 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {currentContent.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {currentContent.title}
                </h3>
                <p className="text-white/90">
                  {currentContent.locations[selectedLocation].name}에서 촬영
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {BUSAN_FEATURES.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-3`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Visit Busan Link */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                더 많은 부산 여행 정보
              </h4>
              <p className="text-gray-600">
                부산관광공사 공식 웹사이트에서 상세한 여행 정보를 확인하세요
              </p>
            </div>
            <a
              href="https://www.visitbusan.net/kr/index.do"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Visit Busan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
