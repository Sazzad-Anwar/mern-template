import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import Fetcher from "../../utils/Fetcher";
import axiosInstance from "../../utils/AxiosInstance";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import ImageCard from "../../components/ImageCard/Index";
import ProgressBar from "../../components/ProgressBar/Index";

export default function Index() {
  const { sideBar } = useGlobalContext();
  const { id } = useParams();
  const { data } = useSWR(`/folders/${id}`, Fetcher);
  const [progress, setProgress] = useState(0);
  const [fileIsPicked, setFileIsPicked] = useState(false);

  const folder = data && data.data;

  const [files, setFiles] = useState([]);

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
      isLink: true,
      link: `/folders/${id}/details`,
      name: folder?.name + "s",
    },
    {
      isLink: false,
      link: "",
      name: "Upload",
    },
  ];

  const upload_pic = async (e) => {
    let formData = new FormData();
    let uploadFiles = e.target.files;

    setFileIsPicked(true);

    for (let i in uploadFiles) {
      formData.append("files", uploadFiles[i]);
    }

    try {
      const { data } = await axiosInstance.post(
        `/files/upload?folderId=${id}`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            let percentComplete = progressEvent.loaded / progressEvent.total;
            percentComplete = parseInt(percentComplete * 100);
            setProgress(percentComplete);
          },
        }
      );
      setFiles(data.data);
      e.target.value = null;
      setFileIsPicked(false);
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
      <div className="my-5">
        <div className="text-white flex flex-col">
          <div className="w-full md:w-96 mx-auto">
            <input
              className="block w-full ring-2 rounded-full ring-violet-700 text-sm dark:text-white text-dark font-mono file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold dark:file:bg-violet-50 file:text-violet-700  hover:file:bg-violet-100"
              type="file"
              onChange={upload_pic}
              multiple
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
                  key={file?._id}
                  file={file}
                  files={files}
                  setFiles={setFiles}
                  folderId={id}
                  // mutate={mutate}
                />
              ))}
          </div>
        </div>
      </div>
      {fileIsPicked && <ProgressBar percent={progress} />}
    </>
  );
}
