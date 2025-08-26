# 카카오 맵 API 설정 가이드

## 1. 카카오 개발자 계정 생성

1. [Kakao Developers](https://developers.kakao.com/) 접속
2. 카카오 계정으로 로그인
3. 개발자 등록

## 2. 애플리케이션 생성

1. 내 애플리케이션 → 애플리케이션 추가하기
2. 앱 이름: "K-콘텐츠 여행 가이드"
3. 회사명: 원하는 회사명 입력

## 3. JavaScript 키 발급

1. 생성된 앱 선택
2. 요약 정보에서 "JavaScript 키" 확인
3. 키 복사

## 4. 플랫폼 설정

1. 앱 설정 → 플랫폼 → Web 플랫폼 등록
2. 사이트 도메인 등록:
   - 개발환경: `http://localhost:5173`
   - 운영환경: 실제 도메인

## 5. API 키 적용

### index.html 파일 수정

```html
<!-- 현재 코드 -->
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services,clusterer,drawing"
></script>

<!-- 실제 키로 변경 -->
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은_JavaScript_키&libraries=services,clusterer,drawing"
></script>
```

### 환경변수 사용 (권장)

1. `.env` 파일 생성:

```bash
VITE_KAKAO_MAP_API_KEY=발급받은_JavaScript_키
```

2. `vite.config.ts` 수정:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    __KAKAO_MAP_API_KEY__: JSON.stringify(process.env.VITE_KAKAO_MAP_API_KEY),
  },
});
```

3. `index.html` 수정:

```html
<script>
  window.KAKAO_MAP_API_KEY = __KAKAO_MAP_API_KEY__;
</script>
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=__KAKAO_MAP_API_KEY__&libraries=services,clusterer,drawing"
></script>
```

## 6. 지도 기능 테스트

1. 개발 서버 실행: `npm run dev`
2. `/map` 페이지로 이동
3. 오징어 게임 촬영지 마커 확인

## 7. 주요 기능

### 구현된 기능

- ✅ 4개 촬영지 마커 표시
- ✅ 커스텀 인포윈도우
- ✅ 지도 컨트롤 (줌, 지도 타입)
- ✅ 마커 클릭 이벤트
- ✅ 카카오맵 길찾기 연동
- ✅ 반응형 디자인

### 지도 좌표 정보

```javascript
const locations = [
  { name: "대한봉진학교", lat: 37.3041, lng: 126.8706 },
  { name: "무인도 세트장", lat: 37.4449, lng: 126.6422 },
  { name: "강남역 지하보도", lat: 37.4979, lng: 127.0276 },
  { name: "을왕리해수욕장", lat: 37.4486, lng: 126.3741 },
];
```

## 8. 추가 기능 구현 가능

### 커스텀 마커 이미지

- 오징어 게임 테마 마커 이미지 제작
- `/public/marker-squidgame.png` 파일 추가

### 클러스터링

- 많은 마커가 있을 때 자동 그룹화
- `clusterer` 라이브러리 활용

### 길찾기 API

- 카카오 모빌리티 API 연동
- 대중교통/자동차 경로 안내

## 9. 문제 해결

### 지도가 안 보이는 경우

1. API 키 확인
2. 도메인 등록 확인
3. 브라우저 콘솔 에러 확인

### CORS 에러

- 카카오 개발자 콘솔에서 도메인 등록 확인

### 마커가 안 보이는 경우

- 좌표값 확인
- 지도 줌 레벨 조정

## 10. 지원 문의

- [카카오 개발자 가이드](https://apis.map.kakao.com/web/guide/)
- [카카오맵 API 문서](https://apis.map.kakao.com/web/)
