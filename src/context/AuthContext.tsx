import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { AuthContextType, User, UserStorageEntry } from "../types/auth";
import { getStorageItem } from "../utils/storage";
import profileImg from "../assets/images/profile.jpg";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() =>
    getStorageItem("current_user", null),
  );

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
    getStorageItem("is_auth", false),
  );

  const login = useCallback((email: string, password: string): boolean => {
    const users: UserStorageEntry[] = getStorageItem("users", []);

    const foundUser = users.find(
      (u) => u.email === email && u.password === btoa(password),
    );

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        username: foundUser.username,
        description: foundUser.description || "",
        avatar: foundUser.avatar || profileImg,
        isAuthenticated: true,
      };

      setUser(userData);
      setIsAuthenticated(true);

      localStorage.setItem("current_user", JSON.stringify(userData));
      localStorage.setItem("access_token", `access-${crypto.randomUUID()}`);
      localStorage.setItem("refresh_token", `refresh-${crypto.randomUUID()}`);
      localStorage.setItem("is_auth", "true");

      return true;
    }
    return false;
  }, []);

  const register = useCallback(
    (email: string, password: string): boolean => {
      const users: UserStorageEntry[] = getStorageItem("users", []);

      if (users.find((u) => u.email === email)) return false;

      const newId = crypto.randomUUID();

      const newUser = {
        id: newId,
        email,
        password: btoa(password),
        username: `@user${newId.toString().slice(-4)}`,
        isAuthenticated: true,
        avatar: profileImg,
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
      const newAccessToken = `access-${crypto.randomUUID()}`;
      localStorage.setItem("access_token", newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error("Refresh token failed", error);
      logout();
      return null;
    }
  }, [logout]);

  const updateUserInfo = useCallback(
    (
      newEmail: string,
      newUsername: string,
      newDescription: string,
      newAvatar: string,
    ) => {
      setUser((prevUser) => {
        if (!prevUser) return null;

        const updated = {
          ...prevUser,
          email: newEmail,
          username: newUsername,
          description: newDescription,
          avatar: newAvatar,
        };

        localStorage.setItem("current_user", JSON.stringify(updated));

        const usersList: UserStorageEntry[] = getStorageItem("users", []);
        const updatedList = usersList.map((u) =>
          u.id === prevUser.id
            ? {
                ...u,
                email: newEmail,
                username: newUsername,
                description: newDescription,
                avatar: newAvatar,
              }
            : u,
        );
        localStorage.setItem("users", JSON.stringify(updatedList));

        return updated;
      });
    },
    [],
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
        refreshToken,
        updateUserInfo,
      }}
    >
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
