// 사용자 타입 정의
export interface User {
  userId: number;
  email: string;
  nickname: string;
  provider?: string;
  createdAt?: string;
}

// 인증 상태
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// 로그인 요청
export interface LoginRequest {
  email: string;
  password: string;
}

// 회원가입 요청
export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
}

// 인증 응답
export interface AuthResponse {
  user: User;
  accessToken: string;
}
