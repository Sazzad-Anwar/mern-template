import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import Fetcher from "../../utils/Fetcher";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import { Button, Pagination, Input } from "antd";
import axiosInstance from "../../utils/AxiosInstance";
import Error from "../../components/Error/Index";
import ImageCard from "../../components/ImageCard/Index";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context/GlobalContextProvider";

let { Search } = Input;

export default function Details() {
  const { sideBar } = useGlobalContext();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalSize, setTotalSize] = useState(0);

  const [files, setFiles] = useState([]);
  const { data } = useSWR(`/folders/${id}`, Fetcher);
  const { data: fileArray, error } = useSWR(
    `/files?folderId=${id}&page=${page}&pageSize=${pageSize}`,
    Fetcher
  );

  const navigate = useNavigate();

  const folder = data && data.data;

  useEffect(() => {
    setFiles(fileArray && fileArray.data);
    setTotalSize(fileArray && fileArray.totalSize);
  }, [fileArray]);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: true,
      link: "/folders",
      name: "Folders",
    },
    {
      isLink: false,
      link: "",
      name: folder?.name + "s",
    },
  ];

  const onSearch = async (value) => {
    try {
      const { data } = await axiosInstance.get(
        `/files?folderId=${id}&page=${page}&pageSize=${pageSize}&q=${value}`
      );
      setFiles(data.data);
      setTotalSize(data.totalSize);
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      {error ? (
        <Error
          error={
            error.response.data.message
              ? error.response.data.message
              : error.message
          }
        />
      ) : (
        <div className="my-5">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => navigate(`/folders/${id}/upload`)}
              type="ghost"
              shape="default"
              className="mr-1 flex py-5 items-center shadow-md dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
            >
              <span>Upload a file</span>
            </Button>

            <Search
              allowClear
              size="large"
              className="w-full lg:w-96 lg:ml-auto search-input"
              placeholder="Search..."
              onSearch={onSearch}
            />
          </div>

          <div
            className={
              sideBar.isOpen
                ? "my-5 normal-transition grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                : "my-5 normal-transition grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
            }
          >
            {files &&
              files.map((file) => (
                <ImageCard
                  key={file._id}
                  file={file}
                  files={files}
                  setFiles={setFiles}
                  folder={folder}
                  page={page}
                  pageSize={pageSize}
                />
              ))}
          </div>
          <Pagination
            showSizeChanger={true}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            total={totalSize}
            current={page}
            pageSize={pageSize}
            className="dark:text-white my-5 flex justify-end items-end"
            hideOnSinglePage={true}
            responsive={true}
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
        </div>
      )}
    </>
  );
}
