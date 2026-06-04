import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PublicRoute from "./PublicRoute/PublicRoute";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Loader from "../UI/Loader/Loader";

const MainPage = lazy(() => import("../../pages/MainPage"));
const TrashPage = lazy(() => import("../../pages/TrashPage"));
const ArchivePage = lazy(() => import("../../pages/ArchivePage"));
const SignIn = lazy(() => import("../../pages/SignIn"));
const SignUp = lazy(() => import("../../pages/SignUp"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return (
    <>
      <div className="sr-only" aria-live="polite" aria-atomic="true" style={{ display: "none" }}>
        {location.pathname}
      </div>

      <Suspense fallback={<Loader />}>
        <Routes location={location}>
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
      </Suspense>
    </>
  );
};

export default AppRoutes;
