import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
  X,
} from "lucide-react";
import { OptimizedImage } from "@/shared/ui";

interface Scene {
  id: number;
  title: string;
  description: string;
  image: string;
  episode?: string;
  timestamp?: string;
  isVideo?: boolean;
}

interface SceneGalleryProps {
  scenes: Scene[];
}

export function SceneGallery({ scenes }: SceneGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              명장면 갤러리
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              오징어 게임의 인상적인 장면들과 실제 촬영지의 모습을 비교해보세요
            </p>
          </div>

          {/* Main Gallery */}
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src={scenes[currentIndex]?.image}
                alt={scenes[currentIndex]?.title}
                className="w-full h-full"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play Button for Videos */}
              {scenes[currentIndex]?.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-6 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Play className="w-12 h-12 text-white" />
                  </button>
                </div>
              )}

              {/* Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  {scenes[currentIndex]?.episode && (
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-3">
                      {scenes[currentIndex].episode}
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {scenes[currentIndex]?.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {scenes[currentIndex]?.description}
                  </p>
                  {scenes[currentIndex]?.timestamp && (
                    <p className="text-white/70 text-sm mt-2">
                      {scenes[currentIndex].timestamp}
                    </p>
                  )}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                {currentIndex + 1} / {scenes.length}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {scenes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-purple-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {scenes.map((scene, index) => (
              <div
                key={scene.id}
                onClick={() => openModal(index)}
                className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-purple-500 scale-105"
                    : "hover:scale-105 hover:shadow-lg"
                }`}
              >
                <OptimizedImage
                  src={scene.image}
                  alt={scene.title}
                  className="w-full h-full"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors" />

                {/* Type Icon */}
                <div className="absolute top-2 right-2">
                  {scene.isVideo ? (
                    <Play className="w-4 h-4 text-white" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Scene Number */}
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Image */}
            <div className="relative">
              <OptimizedImage
                src={scenes[currentIndex]?.image}
                alt={scenes[currentIndex]?.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                loading="lazy"
              />

              {/* Modal Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold mb-2">
                {scenes[currentIndex]?.title}
              </h3>
              <p className="text-gray-300">
                {scenes[currentIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
