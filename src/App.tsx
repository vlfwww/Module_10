import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeContext';
import { NotesProvider } from './context/NotesContext';
import AppRoutes from './components/AppRoutes/AppRoutes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <NotesProvider>
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </NotesProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
