import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RouteProps } from "../../../types/auth";

const PublicRoute: React.FC<RouteProps> = ({ children, isAuthenticated }) => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return children;
};

export default PublicRoute;
