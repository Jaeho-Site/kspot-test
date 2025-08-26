import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Location {
  id: number;
  name: string;
  address: string;
  description: string;
  image: string;
  rating: number;
  visitTime: string;
  sceneDescription: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  tags: string[];
}

interface KakaoMapProps {
  locations: Location[];
  onLocationSelect?: (location: Location) => void;
  selectedLocationId?: number;
  filteredLocationIds?: number[];
}

export function KakaoMap({
  locations,
  onLocationSelect,
  selectedLocationId,
  filteredLocationIds,
}: KakaoMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);

  useEffect(() => {
    if (!mapContainer.current || !window.kakao) return;

    const { kakao } = window;

    // 지도 초기화
    const mapOption = {
      center: new kakao.maps.LatLng(37.4449, 126.6422), // 인천 중구 (중앙 위치)
      level: 10, // 확대 레벨
      draggable: true,
    };

    const mapInstance = new kakao.maps.Map(mapContainer.current, mapOption);
    setMap(mapInstance);

    // 마커들 생성
    const newMarkers = locations.map((location, index) => {
      const markerPosition = new kakao.maps.LatLng(
        location.coordinates.lat,
        location.coordinates.lng
      );

      // 기본 빨간색 마커 사용 (카카오맵 기본 제공)
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        title: location.name,
      });

      marker.setMap(mapInstance);

      // 마커의 투명도 설정 (필터링된 결과가 있을 때)
      if (filteredLocationIds && filteredLocationIds.length > 0) {
        const isFiltered = filteredLocationIds.includes(location.id);
        if (!isFiltered) {
          // 필터링되지 않은 마커는 투명하게 처리
          const markerElement = marker.getContent();
          if (markerElement) {
            markerElement.style.opacity = "0.3";
          }
        }
      }

      // 인포윈도우 생성
      const infowindowContent = `
        <div style="
          padding: 12px; 
          min-width: 200px; 
          font-family: 'Noto Sans KR', sans-serif;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        ">
          <div style="
            font-weight: bold; 
            font-size: 14px; 
            color: #1f2937; 
            margin-bottom: 4px;
            background: linear-gradient(135deg, #9333ea, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">
            ${index + 1}. ${location.name}
          </div>
          <div style="
            font-size: 12px; 
            color: #6b7280; 
            margin-bottom: 6px;
          ">
            ${location.address}
          </div>
          <div style="
            font-size: 11px; 
            color: #8b5cf6; 
            background: #f3f4f6; 
            padding: 4px 8px; 
            border-radius: 4px;
            margin-bottom: 8px;
          ">
            ${location.sceneDescription}
          </div>
          <div style="
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            font-size: 11px;
            color: #4b5563;
          ">
            <span>⭐ ${location.rating}</span>
            <span>⏱️ ${location.visitTime}</span>
          </div>
        </div>
      `;

      const infowindow = new kakao.maps.InfoWindow({
        content: infowindowContent,
        removable: true,
      });

      // 마커 클릭 이벤트
      kakao.maps.event.addListener(marker, "click", () => {
        // 다른 인포윈도우들 닫기
        markers.forEach((m) => {
          if (m.infowindow) {
            m.infowindow.close();
          }
        });

        infowindow.open(mapInstance, marker);
        onLocationSelect?.(location);
      });

      return {
        marker,
        infowindow,
        location,
      };
    });

    setMarkers(newMarkers);

    // 지도 범위 재설정
    const bounds = new kakao.maps.LatLngBounds();
    locations.forEach((location) => {
      bounds.extend(
        new kakao.maps.LatLng(
          location.coordinates.lat,
          location.coordinates.lng
        )
      );
    });
    mapInstance.setBounds(bounds);

    // 컨트롤 추가
    const mapTypeControl = new kakao.maps.MapTypeControl();
    mapInstance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new kakao.maps.ZoomControl();
    mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    return () => {
      // 마커들 제거
      newMarkers.forEach(({ marker }) => {
        marker.setMap(null);
      });
    };
  }, [locations]);

  // 선택된 위치로 지도 이동
  useEffect(() => {
    if (!map || !selectedLocationId) return;

    const selectedMarker = markers.find(
      (m) => m.location.id === selectedLocationId
    );

    if (selectedMarker) {
      const { marker, infowindow, location } = selectedMarker;
      map.setCenter(
        new window.kakao.maps.LatLng(
          location.coordinates.lat,
          location.coordinates.lng
        )
      );
      map.setLevel(3); // 확대

      // 인포윈도우 열기
      markers.forEach((m) => {
        if (m.infowindow) {
          m.infowindow.close();
        }
      });
      infowindow.open(map, marker);
    }
  }, [selectedLocationId, map, markers]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={mapContainer}
        className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
      />

      {/* 지도 로딩 실패시 메시지 */}
      {!window.kakao && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <div className="text-center">
            <div className="text-gray-500 mb-2">🗺️</div>
            <div className="text-gray-600 text-sm">
              카카오 맵을 로드하는 중입니다...
            </div>
            <div className="text-xs text-gray-500 mt-1">
              잠시만 기다려주세요
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
