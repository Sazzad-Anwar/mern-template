import React from "react";
import Documentation from "../../components/Documentation/Index";
import apiJSON from "../../assets/APi.json";
import { APP_NAME } from "../../assets/app.config";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Api() {
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
