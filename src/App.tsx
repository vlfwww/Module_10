import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { NotesProvider } from "./context/NotesContext";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { SettingsProvider } from "./context/SettingsContext";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <SettingsProvider>
          <AuthProvider>
            <NotesProvider>
              <ErrorBoundary>
                <AppRoutes />
              </ErrorBoundary>
            </NotesProvider>
          </AuthProvider>
        </SettingsProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
