import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
  userId: number;
  email: string;
  nickname: string;
  provider?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export function useAuth() {
  const [token, setToken] = useLocalStorage<string | null>("accessToken", null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!token && !!user;

  const login = (userData: User, accessToken: string) => {
    setUser(userData);
    setToken(accessToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  // 토큰이 있으면 사용자 정보 가져오기
  useEffect(() => {
    if (token && !user) {
      // TODO: API를 통해 사용자 정보 가져오기
      // fetchUserInfo();
    }
    setIsLoading(false);
  }, [token, user]);

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}
