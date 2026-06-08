import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import { SettingsContextType, Theme } from "../../types/common";
import { SettingsContext } from "../../context/SettingsContext";
import { NotificationProvider } from "../../context/NotificationContext";
import { AuthContext } from "../../context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { AuthContextType } from "../../types/auth";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

interface RenderOptions {
  isAuthenticated?: boolean;
  theme?: Theme;
  initialEntries?: string[];
  authValue?: Partial<AuthContextType>;
  settingsValue?: Partial<SettingsContextType>;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    isAuthenticated = true,
    theme = "light",
    initialEntries = ["/"],
    authValue,
    settingsValue = {},
  }: RenderOptions = {},
) => {
  const mockSettings = {
    theme,
    toggleTheme: jest.fn(),
    isListView: false,
    toggleView: jest.fn(),
    fontSize: 1,
    changeFontSize: jest.fn(),
    ...settingsValue,
  };

  const defaultAuth = {
    isAuthenticated,
    login: jest.fn(),
    logout: jest.fn(),
    user: null,
    isLoading: false,
    register: jest.fn(),
    updateUserInfo: jest.fn(),
    getUserInfo: jest.fn(),
  };

  const AllProviders = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SettingsContext.Provider value={mockSettings}>
          <NotificationProvider>
            <AuthContext.Provider value={(authValue || defaultAuth) as AuthContextType}>
              <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
            </AuthContext.Provider>
          </NotificationProvider>
        </SettingsContext.Provider>
      </Provider>
    </QueryClientProvider>
  );

  return {
    ...render(ui, { wrapper: AllProviders }),
    mockSettings,
  };
};
