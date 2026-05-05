import { createContext, useContext, ReactNode, useState } from 'react';
import { AuthContextType, User, UserStorageEntry } from '../types/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('current_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_auth') === 'true';
  });

  const register = (email: string, password: string): boolean => {
    const users: UserStorageEntry[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find((u) => u.email === email)) return false;

    const newUser = {
      id: Date.now(),
      email,
      password: btoa(password),
      isAuthenticated: true,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return login(email, password);
  };

  const login = (email: string, password: string): boolean => {
    const users: UserStorageEntry[] = JSON.parse(localStorage.getItem('users') || '[]');

    const foundUser = users.find((u) => u.email === email && u.password === btoa(password));

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        email: foundUser.email,
        isAuthenticated: true,
      };

      setUser(userData);
      setIsAuthenticated(true);

      localStorage.setItem('current_user', JSON.stringify(userData));
      localStorage.setItem('access_token', 'fake-access-' + Date.now());
      localStorage.setItem('refresh_token', 'refresh-access-' + Date.now());
      localStorage.setItem('is_auth', 'true');

      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('is_auth');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('current_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');

    if (!refreshToken) {
      logout();
      return null;
    }

    try {
      const newAccessToken = 'new_access_' + Math.random();
      localStorage.setItem('access_token', newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error('Refresh token failed', error);
      logout();
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};
