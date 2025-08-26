import { useState } from "react";
import { Search, User, MapPin, Heart, Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { name: "홈", path: "/", icon: Sparkles },
  { name: "지도", path: "/map", icon: MapPin },
  { name: "저장됨", path: "/saved", icon: Heart },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              K-SPOT
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Profile Button */}
            <button className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
              <User className="w-5 h-5 text-white" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
