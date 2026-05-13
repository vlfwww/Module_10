import React from "react";
import { Navigate } from "react-router-dom";
import { RouteProps } from "../../types/auth";

const PublicRoute: React.FC<RouteProps> = ({ children, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;
