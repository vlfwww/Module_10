import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { SettingsProvider } from "./context/SettingsContext";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { NotificationProvider } from "./context/NotificationContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <Provider store={store}>
            <NotificationProvider>
              <AuthProvider>
                <ErrorBoundary>
                  <AppRoutes />
                </ErrorBoundary>
              </AuthProvider>
            </NotificationProvider>
          </Provider>
        </SettingsProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
