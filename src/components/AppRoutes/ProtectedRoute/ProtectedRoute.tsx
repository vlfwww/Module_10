import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RouteProps } from "../../../types/auth";

const ProtectedRoute: React.FC<RouteProps> = ({ children, isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
