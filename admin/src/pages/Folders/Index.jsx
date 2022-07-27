import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import FolderCard from "../../components/FolderCard/Index";
import useSWR from "swr";
import Fetcher from "../../utils/Fetcher";
import Error from "../../components/Error/Index";

export default function Index() {
  const navigate = useNavigate();
  const { data, error } = useSWR("/folders", Fetcher);

  let folders = data && data.data;

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/folders",
      name: "Folders",
    },
  ];

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      {error ? (
        <Error
          error={
            error?.response?.data ? error.response.data?.message : error.message
          }
        />
      ) : (
        <div className="my-5">
          <Button
            onClick={() => navigate("/create-folder")}
            type="ghost"
            shape="default"
            className="mr-1 flex py-5 items-center shadow-md dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
          >
            <span>Create Folder</span>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-11 my-5">
            {folders?.map((folder) => (
              <FolderCard key={folder._id} folder={folder} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
