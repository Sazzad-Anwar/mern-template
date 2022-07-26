import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Fetcher from "../../utils/Fetcher";
import dayjs from "dayjs";
import { Tag } from "antd";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Details() {
  const { id } = useParams();
  const { data } = useSWR(`/error-logs/${id}`, Fetcher);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: true,
      link: "/error-logs",
      name: "Error Logs",
    },
    {
      isLink: false,
      link: "",
      name: id,
    },
  ];

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <pre className="dark:text-white pt-3 text-base">
        Error title : {data && data.data.message}
        <br />
        Error accrued at{" "}
        <Tag color="purple">
          <span className="text-base font-medium">
            {data &&
              dayjs(data.data.createdAt).format("MMMM DD, YYYY h:mm:ss a")}
          </span>
        </Tag>
        <br />
        Error originated by: {data && data.data.IP}
        <br />
        {data && data.data.stack}
      </pre>
    </>
  );
}
