import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenicated = true;
  return isAuthenicated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
