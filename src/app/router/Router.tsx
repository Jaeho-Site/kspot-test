import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { HomePage, ContentPage, MapPage } from "@/pages";
import { Header, Footer } from "@/shared/ui";

// 임시 페이지 컴포넌트들
const SavedPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">저장된 장소</h1>
      <p className="text-gray-600">저장한 촬영지들이 여기에 표시됩니다.</p>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">프로필</h1>
      <p className="text-gray-600">사용자 프로필 페이지입니다.</p>
    </div>
  </div>
);

export function Router() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.CONTENT_DETAIL} element={<ContentPage />} />
            <Route path={ROUTES.MAP} element={<MapPage />} />
            <Route path={ROUTES.SAVED} element={<SavedPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

            {/* 404 페이지 */}
            <Route
              path="*"
              element={
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                      404
                    </h1>
                    <p className="text-gray-600">페이지를 찾을 수 없습니다.</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
