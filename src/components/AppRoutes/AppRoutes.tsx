import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import { useAuth } from "../../context/AuthContext";
import TrashPage from "../../pages/TrashPage";
import ArchivePage from "../../pages/ArchivePage";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import NotFoundPage from "../../pages/NotFoundPage";
import ProfilePage from "../../pages/ProfilePage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute isAuthenticated={isAuthenticated}>
            <SignUp />
          </PublicRoute>
        }
      />

      <Route path="/" element={<MainPage />} />

      <Route
        path="/archive"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ArchivePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/trash"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <TrashPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
