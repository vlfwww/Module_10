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

export interface AuthFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onSubmit: (email: string, password: string) => void;
  error?: string;
  setError: (error: string) => void;
  pageType: "signin" | "signup";
}
