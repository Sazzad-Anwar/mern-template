import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR from "swr";
import axiosInstance from "../../utils/AxiosInstance";
import CapitalLetterWord from "../../utils/CapitalLetterWord";
import Fetcher from "../../utils/Fetcher";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Details() {
  let { id } = useParams();
  const [form] = Form.useForm();
  const { data } = useSWR("/categories", Fetcher);
  const { data: selectedCategory } = useSWR(`/categories/${id}`, Fetcher);
  const { data: categoryParent } = useSWR(
    `/categories/${id}?q=getParent`,
    Fetcher
  );
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsActive(selectedCategory && selectedCategory.data.isActive);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  let categories = data && data.data;
  let category = selectedCategory && selectedCategory.data;
  let parent = categoryParent && categoryParent.data;

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
      link: `/category/${id}`,
      name: category?.name,
    },
  ];

  const handleSubmit = async (values) => {
    try {
      await axiosInstance.put(`/categories/${id}`, values);
      toast.success("Category created successfully");
      form.resetFields();
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
      {category !== undefined && parent !== undefined && (
        <div className="w-full pt-3 md:pt-10">
          <Form
            name="Create Category"
            onFinish={handleSubmit}
            autoComplete="off"
            layout="vertical"
            className="w-full mx-1 md:w-96 md:mx-auto"
            initialValues={{
              name: category?.name,
              parent: parent?.name,
              isActive,
            }}
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
                value={category && category.name}
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
              <Select
                value={parent && parent.name}
                allowClear
                placeholder="Select a category"
                size="large"
              >
                {categories &&
                  categories
                    .filter(
                      (categoryItem) =>
                        categoryItem._id !== id &&
                        !category?.children.includes(categoryItem.name)
                    )
                    ?.map((category) => (
                      <Select.Option key={category._id} value={category.name}>
                        {CapitalLetterWord(category.name)}
                      </Select.Option>
                    ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="image"
              label={
                <label className="dark:text-white text-lg">Image Url</label>
              }
            >
              <Input
                size="large"
                value={category && category.image}
                allowClear
                placeholder="Enter image url"
              />
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
      )}
    </>
  );
}
