export interface AuthContextType {
  isAuthenticated: boolean;
  login: (tokens: { access: string; refresh: string }) => void;
  logout: () => void;
  refreshToken: () => Promise<string | null>;
}
