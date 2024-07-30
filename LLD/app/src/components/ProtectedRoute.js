import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenicated = false;
  return isAuthenicated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
