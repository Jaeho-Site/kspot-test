import { useState } from "react";
import { Star, MapPin, Clock, Users, ArrowRight, Heart } from "lucide-react";

const POPULAR_CONTENTS = [
  {
    id: 1,
    title: "오징어 게임",
    category: "K-Drama",
    image: "/assets/k-drama-squidgame.webp",
    rating: 9.2,
    locations: 12,
    duration: "456분",
    viewers: "142M",
    description: "생존을 위한 극한의 게임, 전 세계를 사로잡은 한국 드라마",
    places: ["대한봉진학교", "무인도 세트장", "강남역", "을왕리해수욕장"],
  },
  {
    id: 2,
    title: "BTS",
    category: "K-Pop",
    image: "/assets/k-pop-bts.webp",
    rating: 9.8,
    locations: 25,
    duration: "∞",
    viewers: "40M",
    description: "전 세계를 움직이는 K-POP 그룹의 뮤직비디오 촬영지",
    places: ["반포한강공원", "동대문디자인플라자", "청계천", "남산타워"],
  },
  {
    id: 3,
    title: "신과함께",
    category: "K-Movie",
    image: "/assets/k-movie-withGod.webp",
    rating: 8.7,
    locations: 18,
    duration: "139분",
    viewers: "14M",
    description:
      "한국영화의 새로운 장을 연 판타지 블록버스터 - 부산 대표 촬영지",
    places: ["해운대해수욕장", "부산 감천문화마을", "광안대교", "태종대"],
  },
  {
    id: 4,
    title: "이태원 클라쓰",
    category: "K-Drama",
    image: "/assets/k-drama-itaewonClass.webp",
    rating: 8.9,
    locations: 15,
    duration: "960분",
    viewers: "85M",
    description: "젊음과 꿈이 살아있는 이태원을 배경으로 한 성장 드라마",
    places: ["이태원 거리", "한남동", "홍대", "마포대교"],
  },
  {
    id: 5,
    title: "더 글로리",
    category: "K-Drama",
    image: "/assets/k-drama-theglory.webp",
    rating: 8.5,
    locations: 10,
    duration: "540분",
    viewers: "90M",
    description: "복수와 치유의 이야기를 그린 화제작",
    places: ["속초해수욕장", "양양", "춘천", "남이섬"],
  },
  {
    id: 6,
    title: "두나!",
    category: "K-Drama",
    image: "/assets/k-drama-doona.webp",
    rating: 8.3,
    locations: 8,
    duration: "450분",
    viewers: "45M",
    description: "아이돌과 평범한 대학생의 로맨스",
    places: ["홍대 놀이터", "연남동", "망원동", "한강 뚝섬"],
  },
  {
    id: 7,
    title: "강남스타일",
    category: "K-Pop",
    image: "/assets/k-pop-gangnamstyle.webp",
    rating: 9.5,
    locations: 6,
    duration: "3:39",
    viewers: "5B",
    description: "K-POP을 세계에 알린 기념비적인 뮤직비디오",
    places: ["강남역", "도곡동", "서초구", "올림픽공원"],
  },
];

export function PopularContents() {
  const [selectedContent, setSelectedContent] = useState<number | null>(null);
  const [likedContents, setLikedContents] = useState<Set<number>>(new Set());

  const toggleLike = (contentId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLiked = new Set(likedContents);
    if (newLiked.has(contentId)) {
      newLiked.delete(contentId);
    } else {
      newLiked.add(contentId);
    }
    setLikedContents(newLiked);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            인기 콘텐츠
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            지금 가장 인기 있는
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              K-콘텐츠 촬영지
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전 세계 팬들이 가장 많이 찾는 K-콘텐츠 촬영지를 만나보세요. 드라마,
            영화, K-POP까지 다양한 장르의 성지를 한 번에!
          </p>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_CONTENTS.map((content, index) => (
            <div
              key={content.id}
              className={`group relative cursor-pointer transition-all duration-500 ${
                selectedContent === content.id
                  ? "scale-105 z-10"
                  : "hover:scale-102"
              }`}
              onClick={() => setSelectedContent(content.id)}
            >
              {/* Card */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {content.category}
                    </span>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => toggleLike(content.id, e)}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        likedContents.has(content.id)
                          ? "text-red-500 fill-red-500"
                          : "text-white"
                      }`}
                    />
                  </button>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {content.rating}
                    </span>
                  </div>

                  {/* Rank Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {content.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{content.locations}개 장소</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{content.viewers}</span>
                    </div>
                  </div>

                  {/* Popular Places */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      인기 촬영지
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {content.places.slice(0, 3).map((place, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {place}
                        </span>
                      ))}
                      {content.places.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{content.places.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300 group-hover:shadow-lg">
                    <span>촬영지 보기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            모든 콘텐츠 보기
          </button>
        </div>
      </div>
    </section>
  );
}
