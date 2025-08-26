import { useState, useEffect } from "react";
import { Play, MapPin, Star } from "lucide-react";
import { OptimizedImage } from "@/shared/ui";

const HERO_IMAGES = [
  {
    src: "/assets/k-drama-squidgame-horizontal.jpg",
    title: "오징어 게임",
    subtitle: "전 세계를 사로잡은 K-드라마",
    location: "대한민국 서울",
    category: "K-Drama",
  },
  {
    src: "/assets/k-pop-bts-horizontal.jpg",
    title: "BTS",
    subtitle: "세계를 움직이는 K-POP",
    location: "대한민국 전국",
    category: "K-Pop",
  },
  {
    src: "/assets/k-movie-withGod-horizontal.jpg",
    title: "신과함께",
    subtitle: "한국 영화의 새로운 지평",
    location: "대한민국 부산",
    category: "K-Movie",
  },
  {
    src: "/assets/k-drama-itaewonClass-horizontal.jpg",
    title: "이태원 클라쓰",
    subtitle: "젊음과 꿈이 살아있는 이태원",
    location: "서울 이태원",
    category: "K-Drama",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentImage = HERO_IMAGES[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <OptimizedImage
              src={image.src}
              alt={image.title}
              className="w-full h-full"
              loading={index === 0 ? "eager" : "lazy"}
              objectPosition="center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            {currentImage.category}
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              K-SPOT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 font-light">
            {currentImage.subtitle}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center text-lg mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            {currentImage.location}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            K-콘텐츠 속 명장면들이 탄생한 바로 그 장소에서
            <br />
            특별한 한국 여행을 시작하세요
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              여행 시작하기
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-full transition-all duration-300 border border-white/30 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              트레일러 보기
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-20">
        {HERO_IMAGES.map((image, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentSlide
                ? "ring-2 ring-white scale-110"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
