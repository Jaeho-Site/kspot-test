import {
  ArrowLeft,
  Share2,
  Heart,
  MapPin,
  Star,
  Clock,
  Users,
} from "lucide-react";
import { OptimizedImage } from "@/shared/ui";

interface ContentHeroProps {
  title: string;
  category: string;
  rating: number;
  year: string;
  locations: number;
  duration: string;
  viewers: string;
  description: string;
  mainImage: string;
  onBack?: () => void;
  onShare?: () => void;
  onLike?: () => void;
  onMapView?: () => void;
  isLiked?: boolean;
}

export function ContentHero({
  title,
  category,
  rating,
  year,
  locations,
  duration,
  viewers,
  description,
  mainImage,
  onBack,
  onShare,
  onLike,
  onMapView,
  isLiked = false,
}: ContentHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={mainImage}
          alt={title}
          className="w-full h-full"
          loading="eager"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      </div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={onShare}
              className="p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/30 transition-colors"
            >
              <Share2 className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={onLike}
              className="p-3 bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/30 transition-colors"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  isLiked ? "text-red-500 fill-red-500" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Category & Rating */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
              {category}
            </span>
            <div className="flex items-center space-x-1 text-white">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{rating}</span>
            </div>
            <span className="text-white/80">{year}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-white/90">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{locations}개 촬영지</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>{viewers} 시청자</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('location-grid');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              촬영지 보기
            </button>
            <button 
              onClick={onMapView}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-colors border border-white/20"
            >
              지도에서 보기
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
