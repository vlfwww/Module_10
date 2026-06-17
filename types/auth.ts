export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserInfo: (updatedFields: Partial<User>) => Promise<boolean>;
  getUserInfo: () => Promise<User | null>;
}

export interface User {
  id: string;
  username: string;
  email?: string;
  firstName?: string;
  profileImage?: string;
  description?: string;
  secondName?: string;
  lastLogin?: string;
  creationDate?: string;
  modifiedDate?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
}

export interface AuthFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onSubmit: (email: string, password: string) => Promise<void>;
  error: string;
  setError: (msg: string) => void;
  pageType: "signin" | "signup";
  validationRules: {
    email: object;
    password: object;
  };
}

export interface RouteProps {
  children: React.ReactElement;
  isAuthenticated: boolean;
}

export interface ProfileFormValues {
  username: string;
  email: string;
  description: string;
}

export interface AuthInputs {
  email: string;
  password: string;
}
