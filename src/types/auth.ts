export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => boolean;
  logout: () => void;
  refreshToken: () => Promise<string | null>;
  updateUserInfo: (
    newEmail: string,
    newUsername: string,
    newDescription: string,
    newAvatar: string,
  ) => void;
}

export interface User {
  id: string;
  isAuthenticated: boolean;
  email: string;
  username: string;
  description?: string;
  avatar?: string;
}

export interface UserStorageEntry extends User {
  password: string;
}

export interface AuthFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onSubmit: (email: string, password: string) => void;
  error?: string;
  setError: (error: string) => void;
  pageType: "signin" | "signup";
}

export interface RouteProps {
  children: React.ReactElement;
  isAuthenticated: boolean;
}
