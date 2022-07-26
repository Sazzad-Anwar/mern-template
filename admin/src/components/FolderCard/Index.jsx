import { Button, Form, Input, Popconfirm, Tooltip } from "antd";
import React, { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import axiosInstance from "../../utils/AxiosInstance";
import CapitalLetterWord from "../../utils/CapitalLetterWord";

export default function Index({ folder }) {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const submitBtnRef = useRef();

  const deleteFolder = async (id) => {
    try {
      await axiosInstance.delete(`/folders/${id}`);
      toast.success("Category deleted successfully");
      mutate(`/folders`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const saveFolder = async (values) => {
    setEditMode(false);
    if (values.name !== folder.name) {
      try {
        console.log(values);
        await axiosInstance.put(`/folders/${folder._id}`, values);
        toast.success("Folder is created successfully");
        mutate(`/folders`);
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
      <div className="flex w-full h-full justify-center py-3 items-center dark:hover:bg-deepDark hover:bg-gray-300 normal-transition">
        <div className="flex flex-col items-center justify-center">
          <div className="relative group">
            <button onClick={() => navigate(`/folders/${folder._id}/details`)}>
              <FaFolder size={35} className="dark:text-white text-gray-500" />
            </button>
            <Tooltip
              title="Delete folder"
              className="hidden group-hover:block absolute -top-3 -right-5"
            >
              <Popconfirm
                title="Are you sure to delete this folder?"
                onConfirm={() => deleteFolder(folder._id)}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  type="text"
                  shape="default"
                  icon={
                    <div className="flex justify-center items-center">
                      <AiFillCloseCircle className="dark:text-white" />
                    </div>
                  }
                />
              </Popconfirm>
            </Tooltip>
          </div>
          {editMode ? (
            <>
              <Form
                initialValues={{
                  name: folder.name,
                }}
                onFinish={saveFolder}
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

                <Button
                  ref={submitBtnRef}
                  htmlType="submit"
                  className="hidden"
                />
              </Form>
            </>
          ) : (
            <Tooltip title="Double click to name to edit" placement="bottom">
              <button onClick={handleClick} className="truncate">
                <p className="font-medium dark:text-white text-sm py-1.5 truncate w-full">
                  {CapitalLetterWord(folder.name)}
                </p>
              </button>
            </Tooltip>
          )}
        </div>
      </div>
    </>
  );
}
