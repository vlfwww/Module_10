import { createContext, useContext, ReactNode, useState } from "react";
import { AuthContextType } from "../types/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("is_auth") === "true";
  });

  const login = (tokens: { access: string; refresh: string }) => {
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);
    setIsAuthenticated(true);
    localStorage.setItem("is_auth", "true");
  };

  const logout = () => {
    localStorage.removeItem("is_auth");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token")
    setIsAuthenticated(false);
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refresh_token");

    if (!refreshToken) {
      logout();
      return null;
    }

    try {
      const newAccessToken = "new_access_" + Math.random();
      localStorage.setItem("access_token", newAccessToken);
      
      return newAccessToken;
    } catch (error) {
      console.error("Refresh token failed", error);
      logout();
      return null;
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
