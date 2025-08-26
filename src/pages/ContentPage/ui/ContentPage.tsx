import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContentHero,
  LocationGrid,
  SceneGallery,
} from "@/features/content/content-detail";

// 오징어 게임 촬영지 데이터
const squidGameData = {
  title: "오징어 게임",
  category: "K-Drama",
  rating: 9.2,
  year: "2021",
  locations: 12,
  duration: "456분",
  viewers: "142M",
  description:
    "생존을 위한 극한의 게임, 전 세계를 사로잡은 한국 드라마. 어린 시절 놀이가 생과 사를 가르는 잔혹한 게임이 되어 돌아왔다.",
  mainImage: "/assets/k-drama-squidgame-horizontal.jpg",
};

const locations = [
  {
    id: 1,
    name: "대한봉진학교",
    address: "경기도 안산시 상록구",
    description:
      "오징어 게임의 주요 촬영지로 사용된 폐교. 게임이 진행되는 기숙사와 운동장 장면이 촬영되었습니다.",
    image: "/assets/squidgame-spotdetail.jpg",
    rating: 4.8,
    visitTime: "1-2시간",
    sceneDescription:
      "참가자들이 머무는 기숙사와 각종 게임이 진행되는 메인 무대",
    coordinates: { lat: 37.3041, lng: 126.8706 },
    tags: ["메인 촬영지", "폐교", "기숙사", "게임장"],
  },
  {
    id: 2,
    name: "무인도 세트장",
    address: "인천광역시 중구",
    description:
      "드라마 속 무인도를 재현한 세트장. 마지막 게임인 오징어 게임이 펼쳐진 장소입니다.",
    image: "/assets/squidgame-spotdetail2.jpg",
    rating: 4.6,
    visitTime: "30분",
    sceneDescription: "마지막 오징어 게임과 클라이맥스 장면이 촬영된 곳",
    coordinates: { lat: 37.4449, lng: 126.6422 },
    tags: ["오징어게임", "마지막게임", "세트장", "클라이맥스"],
  },
  {
    id: 3,
    name: "강남역 지하보도",
    address: "서울특별시 강남구",
    description:
      "주인공 기훈이 첫 번째 게임에 참여하게 되는 계기가 된 장소. 딱지치기 게임 장면이 촬영되었습니다.",
    image: "/assets/squidgame-spotdetail3.png",
    rating: 4.4,
    visitTime: "20분",
    sceneDescription: "정장 남자와의 딱지치기 게임으로 모든 것이 시작된 곳",
    coordinates: { lat: 37.4979, lng: 127.0276 },
    tags: ["딱지치기", "시작점", "지하보도", "모집"],
  },
];

const scenes = [
  {
    id: 1,
    title: "무궁화 꽃이 피었습니다",
    description:
      "456명의 참가자들이 참여한 첫 번째 게임. 어린 시절 추억의 놀이가 생과 사를 가르는 잔혹한 게임으로 변했다.",
    image: "/assets/squidgame-spotdetail.jpg",
    episode: "1화",
    timestamp: "32:15",
  },
  {
    id: 2,
    title: "설탕 뽑기",
    description:
      "달고나에서 모양을 온전히 뽑아내야 하는 두 번째 게임. 단순해 보이지만 가장 어려운 게임 중 하나.",
    image: "/assets/squidgame-spotdetail2.jpg",
    episode: "3화",
    timestamp: "15:30",
  },
  {
    id: 3,
    title: "줄다리기",
    description:
      "팀워크가 중요한 세 번째 게임. 전략과 협력이 승패를 가르는 게임.",
    image: "/assets/squidgame-spotdetail3.png",
    episode: "4화",
    timestamp: "28:45",
  },
  {
    id: 4,
    title: "오징어 게임",
    description:
      "마지막 게임이자 드라마의 제목이 된 게임. 어린 시절의 추억과 현실의 잔혹함이 만나는 순간.",
    image: "/assets/squidgame-spotdetail4.png",
    episode: "9화",
    timestamp: "45:20",
  },
];

export function ContentPage() {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: squidGameData.title,
        text: squidGameData.description,
        url: window.location.href,
      });
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleLocationSelect = (location: any) => {
    console.log("Selected location:", location);
  };

  const handleMapView = () => {
    navigate("/map");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ContentHero
        {...squidGameData}
        onBack={handleBack}
        onShare={handleShare}
        onLike={handleLike}
        isLiked={isLiked}
      />

      {/* Location Grid */}
      <LocationGrid
        locations={locations}
        onLocationSelect={handleLocationSelect}
        onMapView={handleMapView}
      />

      {/* Scene Gallery */}
      <SceneGallery scenes={scenes} />
    </div>
  );
}
