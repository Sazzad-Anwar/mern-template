import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import Fetcher from "../../utils/Fetcher";
import { Button, Form, Image, Input, Progress, Tooltip } from "antd";
import axiosInstance from "../../utils/AxiosInstance";
import { API_URL } from "../../assets/app.config";
import { toast } from "react-toastify";
import CapitalLetterWord from "../../utils/CapitalLetterWord";

export default function Index() {
  const { id } = useParams();
  const { data } = useSWR(`/folders/${id}`, Fetcher);
  const [editMode, setEditMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileIsPicked, setFileIsPicked] = useState(false);
  const submitBtnRef = useRef();

  const folder = data && data.data;

  const [fileList, setFileList] = useState([]);

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
    let file = new FormData();
    file.append("files", e.target.files[0]);
    setFileIsPicked(true);
    try {
      const { data } = await axiosInstance.post(
        `/files/upload?folderId=${id}`,
        file,
        {
          onUploadProgress: (progressEvent) => {
            let percentComplete = progressEvent.loaded / progressEvent.total;
            percentComplete = parseInt(percentComplete * 100);
            setProgress(percentComplete);
          },
        }
      );
      setFileList((preImage) => [...preImage, data.data[0]]);
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const saveFile = async (values) => {
    setEditMode(false);
    if (values.name !== fileList[0].name || values.name !== "") {
      try {
        let { data } = await axiosInstance.put(
          `/files/${fileList[0]._id}`,
          values
        );
        setFileList((preImage) => [data.data, ...preImage.slice(1)]);
        toast.success("Image name is saved");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handleClick = (e) => {
    if (e.detail === 2) {
      setEditMode(true);
    }
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="my-5 flex justify-center items-center">
        <div className="text-white flex flex-col">
          {!fileList.length ? (
            <div>
              <input
                className="block w-full ring-2 rounded-full ring-violet-700 text-sm dark:text-white text-dark font-mono file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold dark:file:bg-violet-50 file:text-violet-700  hover:file:bg-violet-100"
                type="file"
                onChange={upload_pic}
              />
              {fileIsPicked && (
                <Progress percent={progress} className="dark:text-white" />
              )}
            </div>
          ) : (
            <>
              {fileList.map((file) => (
                <div key={file._id} className="flex flex-col justify-center">
                  <Image
                    alt={file.name}
                    key={file._id}
                    className="w-auto h-auto md:h-96"
                    src={API_URL + "/static/" + file.url}
                  />
                  {editMode ? (
                    <Form
                      initialValues={{
                        name: file.name,
                      }}
                      onFinish={saveFile}
                      className="mt-5"
                    >
                      <Form.Item
                        name="name"
                        className="mb-0"
                        rules={[
                          {
                            required: true,
                            message: "Please input the file name",
                          },
                        ]}
                      >
                        <Input
                          placeholder="File name"
                          className="w-full text-center"
                          size="large"
                          autoFocus
                          onBlur={() => {
                            setEditMode(false);
                            submitBtnRef.current.click();
                          }}
                        />
                      </Form.Item>

                      <Button
                        ref={submitBtnRef}
                        htmlType="submit"
                        className="hidden"
                      />
                    </Form>
                  ) : (
                    <Tooltip
                      title="Double click to name to edit"
                      placement="bottom"
                      className="mt-4"
                    >
                      <button onClick={handleClick} className="truncate">
                        <p className="font-medium dark:text-white text-sm truncate w-full">
                          {CapitalLetterWord(file.name)}
                        </p>
                      </button>
                    </Tooltip>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
