import React from "react";
import Documentation from "../../components/Documentation/Index";
import apiJSON from "../../assets/APi.json";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import { APP_NAME } from "../../assets/app.config";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Api() {
  const { auth } = useGlobalContext();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/api",
      name: "Api Documentation",
    },
  ];

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <Documentation
        src={apiJSON}
        title={`REST API documentation for ${APP_NAME}`}
      />
    </>
  );
}
