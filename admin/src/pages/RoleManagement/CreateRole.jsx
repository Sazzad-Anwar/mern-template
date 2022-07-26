import React from "react";
import Error from "../../components/Error/Index";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import axiosInstance from "../../utils/AxiosInstance";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function CreateRole() {
  const { auth } = useGlobalContext();
  const navigate = useNavigate();

  const createRole = async (values) => {
    try {
      await axiosInstance.post(`/roles`, values);
      toast.success("Role added successfully!");
      mutate("/roles");
      navigate("/role-management");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: true,
      link: "/role-management",
      name: "Role Management",
    },
    {
      isLink: false,
      link: "/create-role",
      name: "Create Role",
    },
  ];

  if (auth && !auth.user.role === "superadmin") {
    <Error error="Your are not allowed to access this page" />;
  } else {
    return (
      <>
        <BreadCrumbs details={breadcrumbs} />
        <div className="my-5">
          <Form
            name="Add role"
            className="w-full mx-1 md:w-96 md:mx-auto"
            onFinish={createRole}
            layout="vertical"
          >
            <Form.Item
              label={<label className="dark:text-white text-lg">Role</label>}
              name="role"
              rules={[{ required: true, message: "Please input role!" }]}
            >
              <Input size="large" allowClear />
            </Form.Item>

            <Button
              htmlType="submit"
              type="primary"
              className="dark:text-white text-blue-600 hover:text-white"
            >
              Save
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
