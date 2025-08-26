import { type ReactNode, createContext, useContext } from "react";
import { useAuth as useAuthHook, type AuthState } from "@/shared/hooks";

const AuthContext = createContext<AuthState | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAuthHook();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
