import { useState } from "react";
import { Film, Music, Tv, Sparkles } from "lucide-react";

const CATEGORIES = [
  {
    id: "all",
    name: "전체",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    description: "모든 K-콘텐츠 장소",
  },
  {
    id: "drama",
    name: "K-Drama",
    icon: Tv,
    color: "from-blue-500 to-cyan-500",
    description: "한국 드라마 촬영지",
  },
  {
    id: "movie",
    name: "K-Movie",
    icon: Film,
    color: "from-red-500 to-orange-500",
    description: "한국 영화 촬영지",
  },
  {
    id: "kpop",
    name: "K-Pop",
    icon: Music,
    color: "from-green-500 to-emerald-500",
    description: "K-POP 뮤직비디오 촬영지",
  },
];

interface CategorySelectorProps {
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

export function CategorySelector({
  selectedCategory = "all",
  onCategoryChange,
}: CategorySelectorProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            어떤 K-콘텐츠를 찾고 계신가요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            관심 있는 카테고리를 선택하고 여러분이 사랑하는 K-콘텐츠의 촬영지를
            발견해보세요
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            const isHovered = hoveredCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange?.(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative group p-8 rounded-2xl transition-all duration-300 transform ${
                  isSelected || isHovered
                    ? "scale-105 shadow-2xl"
                    : "hover:scale-102 shadow-lg"
                } ${isSelected ? "ring-2 ring-purple-500" : ""}`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    category.color
                  } rounded-2xl transition-opacity duration-300 ${
                    isSelected || isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* White Background */}
                <div
                  className={`absolute inset-0 bg-white rounded-2xl transition-opacity duration-300 ${
                    isSelected || isHovered ? "opacity-90" : "opacity-100"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-all duration-300 ${
                      isSelected || isHovered
                        ? "bg-white/20 backdrop-blur-sm"
                        : "bg-gray-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isSelected || isHovered ? "text-white" : "text-gray-600"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      isSelected || isHovered ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm transition-colors duration-300 ${
                      isSelected || isHovered
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>

                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </button>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">촬영 장소</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-gray-600">K-드라마</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
            <div className="text-gray-600">K-영화</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">300+</div>
            <div className="text-gray-600">K-POP MV</div>
          </div>
        </div>
      </div>
    </section>
  );
}
