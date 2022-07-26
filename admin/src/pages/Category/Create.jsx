import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR from "swr";
import axiosInstance from "../../utils/AxiosInstance";
import Fetcher from "../../utils/Fetcher";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Create() {
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { data } = useSWR("/categories", Fetcher);
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(data && data.data);
  }, [data]);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: true,
      link: "/category",
      name: "Category",
    },
    {
      isLink: false,
      link: "",
      name: "Add a category",
    },
  ];

  const handleSubmit = async (values) => {
    try {
      await axiosInstance.post("/categories", values);
      values.isActive = isActive;
      toast.success("Category created successfully");
      values.name = "";
      values.parent = "";
      setIsActive(false);
      navigate("/category");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onChange = (e) => {
    setIsActive(e.target.checked);
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="w-full pt-3 md:pt-10">
        <Form
          name="Create Category"
          onFinish={handleSubmit}
          autoComplete="off"
          layout="vertical"
          className="w-full mx-1 md:w-96 md:mx-auto"
        >
          <Form.Item
            name="name"
            label={
              <label className="dark:text-white text-lg">Category Name</label>
            }
            rules={[
              {
                required: true,
                message: "Please input category name!",
              },
            ]}
          >
            <Input
              size="large"
              allowClear
              placeholder="Enter a category name"
            />
          </Form.Item>

          <Form.Item
            name="parent"
            label={
              <label className="dark:text-white text-lg">Select Parent</label>
            }
          >
            <Select allowClear placeholder="Select a category" size="large">
              {categories?.map((category) => (
                <Select.Option key={category._id} value={category.name}>
                  {category.name.split("")[0].toUpperCase() +
                    category.name
                      .split("")
                      .filter((letter) => letter !== category.name.split("")[0])
                      .join("")}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="isActive">
            <Checkbox
              onChange={onChange}
              checked={isActive}
              className="dark:text-white text-base"
            >
              Active
            </Checkbox>
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
