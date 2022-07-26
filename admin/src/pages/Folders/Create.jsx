import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/AxiosInstance";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Create() {
  const navigate = useNavigate();

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
      name: "Create a folder",
    },
  ];

  const handleSubmit = async (values) => {
    try {
      await axiosInstance.post("/folders", values);
      toast.success("Folder is created successfully");
      values.name = "";
      navigate("/folders");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="w-full pt-3 md:pt-10">
        <Form
          name="Create Folder"
          onFinish={handleSubmit}
          autoComplete="off"
          layout="vertical"
          className="w-full mx-1 md:w-96 md:mx-auto"
        >
          <Form.Item
            name="name"
            label={
              <label className="dark:text-white text-lg">Folder Name</label>
            }
            rules={[
              {
                required: true,
                message: "Please input folder name!",
              },
            ]}
          >
            <Input size="large" allowClear placeholder="Enter a folder name" />
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            size="large"
            className="w-full"
          >
            Save
          </Button>
        </Form>
      </div>
    </>
  );
}
