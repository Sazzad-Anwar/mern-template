import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { API_URL } from "../../assets/app.config";
import { FiCopy } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import axiosInstance from "../../utils/AxiosInstance";
import CopyToClipboard from "../../utils/CopyToClipboard";
import { Button, Form, Input, Popconfirm, Tooltip, Image } from "antd";

export default function Index({ file, files, setFiles, folderId }) {
  const [editMode, setEditMode] = useState(false);
  const submitBtnRef = useRef();

  const deleteFile = async (id) => {
    try {
      await axiosInstance.delete(`/files/${id}`);
      setFiles(files.filter((file) => file._id !== id));
      mutate(`/files?folderId=${id}`, { data: files }, false);
      toast.success("File is deleted");
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
    if (values.name !== file.name) {
      try {
        await axiosInstance.put(`/files/${file._id}`, values);
        mutate(
          `/files?folderId=${folderId}`,
          {
            data: files.map((item) =>
              item._id === file._id ? { ...item, name: values.name } : item
            ),
          },
          false
        );
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
    <div>
      <div className="flex justify-between items-center">
        {editMode ? (
          <Form
            initialValues={{
              name: file.name,
            }}
            onFinish={saveFile}
            className="mr-2"
          >
            <Form.Item
              name="name"
              className="mb-0"
              rules={[
                {
                  required: true,
                  message: "Please input the folder name",
                },
              ]}
            >
              <Input
                placeholder="Folder name"
                className="w-full text-center"
                size="small"
                autoFocus
                onBlur={() => {
                  setEditMode(false);
                  submitBtnRef.current.click();
                }}
              />
            </Form.Item>

            <Button ref={submitBtnRef} htmlType="submit" className="hidden" />
          </Form>
        ) : (
          <Tooltip title="Double click to name to edit" placement="bottom">
            <button onClick={handleClick} className="truncate">
              <span className="dark:text-white text-black truncate font-mono">
                {file.name}
              </span>
            </button>
          </Tooltip>
        )}
        <div className="flex items-center">
          <Tooltip title="Copy url to clipboard">
            <button
              onClick={() => CopyToClipboard(API_URL + "/static/" + file.url)}
            >
              <FiCopy className="dark:text-white text-black" />
            </button>
          </Tooltip>
          <Tooltip title="Delete file">
            <Popconfirm
              title="Are you sure to delete this file?"
              onConfirm={() => deleteFile(file._id)}
              okText="Yes"
              cancelText="No"
              className="ml-2"
            >
              <button>
                <AiFillCloseCircle className="dark:text-white text-black" />
              </button>
            </Popconfirm>
          </Tooltip>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          height="auto"
          width="auto"
          alt={file.name}
          src={API_URL + "/static/" + file.url}
        />
      </div>
    </div>
  );
}
