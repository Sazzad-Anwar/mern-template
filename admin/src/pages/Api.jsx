import React from "react";
import Documentation from "../components/Documentation";
import apiJSON from "../APi.json";
import { useGlobalContext } from "../context/GlobalContextProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function Api() {
  const { auth } = useGlobalContext();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <Documentation
      src={apiJSON}
      title="REST API documentation for Mern Template"
    />
  );
}
