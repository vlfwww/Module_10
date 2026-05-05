export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => boolean;
  logout: () => void;
  refreshToken: () => Promise<string | null>;
}

export interface User {
  id: number;
  isAuthenticated: boolean;
  email: string;
}

export interface UserStorageEntry extends User {
  password: string;
}
