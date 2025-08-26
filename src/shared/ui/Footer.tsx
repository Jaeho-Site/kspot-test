import {
  Sparkles,
  MapPin,
  Heart,
  User,
  Instagram,
  Youtube,
  Mail,
  Globe,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface TabItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

function TabItem({ href, icon, label, isActive }: TabItemProps) {
  return (
    <Link
      to={href}
      className={`flex flex-col items-center justify-center space-y-1 py-3 px-4 transition-all duration-300 relative ${
        isActive ? "text-purple-600" : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {/* Active Indicator */}
      {isActive && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
      )}

      <div
        className={`p-2 rounded-full transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-purple-100 to-pink-100 scale-110"
            : "hover:bg-gray-100"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-xs font-medium ${isActive ? "font-semibold" : ""}`}
      >
        {label}
      </span>
    </Link>
  );
}

export function Footer() {
  const location = useLocation();

  const tabs = [
    {
      href: "/",
      icon: <Sparkles className="w-5 h-5" />,
      label: "홈",
    },
    {
      href: "/map",
      icon: <MapPin className="w-5 h-5" />,
      label: "지도",
    },
    {
      href: "/saved",
      icon: <Heart className="w-5 h-5" />,
      label: "저장됨",
    },
    {
      href: "/profile",
      icon: <User className="w-5 h-5" />,
      label: "프로필",
    },
  ];

  // 홈페이지인 경우 모바일 네비게이션만 표시
  if (location.pathname === "/") {
    return (
      <>
        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 sticky bottom-0 z-50 shadow-lg">
          <div className="flex justify-around items-center">
            {tabs.map((tab) => (
              <TabItem
                key={tab.href}
                {...tab}
                isActive={location.pathname === tab.href}
              />
            ))}
          </div>
        </nav>

        {/* Desktop Footer */}
        <footer className="hidden md:block bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    K-SPOT
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  K-콘텐츠 팬들을 위한 특별한 한국 여행 가이드. 드라마, 영화,
                  K-POP 촬영지를 찾아 떠나는 성지순례의 시작점입니다.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-colors duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-colors duration-300"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      홈
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/map"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      촬영지 지도
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/saved"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      저장된 장소
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      프로필
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4">카테고리</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      K-드라마
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      K-영화
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      K-POP
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      여행 가이드
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 K-SPOT. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  개인정보처리방침
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  이용약관
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  고객센터
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }

  // 다른 페이지들은 기존 하단 네비게이션
  return (
    <nav className="bg-white/90 backdrop-blur-md border-t border-gray-200 sticky bottom-0 z-50 shadow-lg">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <TabItem
            key={tab.href}
            {...tab}
            isActive={location.pathname === tab.href}
          />
        ))}
      </div>
    </nav>
  );
}
