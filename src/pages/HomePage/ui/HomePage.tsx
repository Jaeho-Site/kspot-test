import { useState } from "react";
import {
  HeroSection,
  CategorySelector,
  PopularContents,
  BusanSpotlight,
  TravelGuide,
} from "@/features/home";

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Selector */}
      <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Popular Contents */}
      <PopularContents />

      {/* Busan Spotlight */}
      <BusanSpotlight />

      {/* Travel Guide */}
      <TravelGuide />
    </div>
  );
}
