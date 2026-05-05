import React from 'react';
import MainPage from '../../pages/MainPage';
import { useAuth } from '../../context/AuthProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import TrashPage from '../../pages/TrashPage';
import ArchivePage from '../../pages/ArchivePage';
import SignIn from '../../pages/AuthPages/SignIn';
import SignUp from '../../pages/AuthPages/SignUp';
import NotFoundPage from '../../pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route path="/signin" element={!isAuthenticated ? <SignIn /> : <Navigate to="/" />} />
      <Route path="/signup" element={!isAuthenticated ? <SignUp /> : <Navigate to="/" />} />
      <Route path="/" element={<MainPage />} />
      <Route
        path="/archive"
        element={isAuthenticated ? <ArchivePage /> : <Navigate to="/signin" />}
      />
      <Route path="/trash" element={isAuthenticated ? <TrashPage /> : <Navigate to="/signin" />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
