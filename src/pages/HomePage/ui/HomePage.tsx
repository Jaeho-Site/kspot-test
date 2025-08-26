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
      <HeroSection />
      <PopularContents />
      <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <BusanSpotlight />
      <TravelGuide />
    </div>
  );
}
