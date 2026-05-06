import { createContext, useContext, ReactNode, useState, useCallback } from "react";
import { AuthContextType, User, UserStorageEntry } from "../types/auth";
import { getStorageItem } from "../utils/storage";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => getStorageItem("current_user", null));

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
    getStorageItem("is_auth", false),
  );

  const login = useCallback((email: string, password: string): boolean => {
    const users: UserStorageEntry[] = getStorageItem("users", []);

    const foundUser = users.find((u) => u.email === email && u.password === btoa(password));

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        isAuthenticated: true,
      };

      setUser(userData);
      setIsAuthenticated(true);

      localStorage.setItem("current_user", JSON.stringify(userData));
      localStorage.setItem("access_token", "fake-access-" + Date.now());
      localStorage.setItem("refresh_token", "refresh-access-" + Date.now());
      localStorage.setItem("is_auth", "true");

      return true;
    }
    return false;
  }, []);

  const register = useCallback(
    (email: string, password: string): boolean => {
      const users: UserStorageEntry[] = getStorageItem("users", []);

      if (users.find((u) => u.email === email)) return false;

      const newUser = {
        id: Date.now(),
        email,
        password: btoa(password),
        isAuthenticated: true,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      return login(email, password);
    },
    [login],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("is_auth");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("current_user");
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const refreshToken = useCallback(async () => {
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
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register, refreshToken }}>
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
