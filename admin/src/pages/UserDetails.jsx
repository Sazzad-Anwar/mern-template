import { Avatar, Button, Checkbox, Form, Input, Radio } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import axiosInstance from "../components/AxiosInstance";
import Fetcher from "../components/Fetcher";
import Loader from "../components/Loader";
import { useGlobalContext } from "../context/GlobalContextProvider";
import AdminLayout from "../layouts/AdminLayout";

export default function UserDetails() {
  const { id } = useParams();
  const { auth } = useGlobalContext();
  const { data } = useSWR(`/users/${id}`, Fetcher);
  const { data: roles } = useSWR('/roles', Fetcher);

  let user = data && data.data;

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: true,
      link: "/users",
      name: "Users",
    },
    {
      isLink: false,
      link: "",
      name: user && user !== "undefined" && user.name,
    },
  ];

  const saveUserDetails = async (values) => {
    try {
      await axiosInstance.put(`/users/${id}`, values);
      toast.success("User details updated successfully!");
      mutate(`/users/${id}`, values);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AdminLayout breadcrumbs={breadcrumbs}>
      <div className="my-10 container mx-auto rounded p-5">
        {user && user !== "undefined" ? (
          <div className="w-96 mx-auto">
            <div className="text-center mb-5">
              {user.avatarUrl !== "" ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-28 ring-2 ring-gray-900 shadow-lg h-28 object-cover rounded-full"
                />
              ) : (
                <Avatar className="dark:text-gray-900" size={50}>
                  {user.name.split("")[0].toUpperCase()}
                </Avatar>
              )}
            </div>
            <Form
              name="user-details"
              layout="vertical"
              initialValues={{
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role,
                isActive: user.isActive,
              }}
              className="ml-5 grid grid-cols-1 gap-2"
              onFinish={saveUserDetails}
            >
              <Form.Item
                label={<span className="text-lg dark:text-white">Name</span>}
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label={<span className="text-lg dark:text-white">Email</span>}
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type={"email"} size="large" />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-lg dark:text-white">Phone Number</span>
                }
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please input phone number!" },
                ]}
              >
                <Input type={"tel"} size="large" />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-lg dark:text-white">User Status</span>
                }
                name="isActive"
                rules={[
                  { required: true, message: "Please selet user status!" },
                ]}
              >
                <Radio.Group>
                  <Radio value={true} className="dark:text-white">
                    Active
                  </Radio>
                  <Radio value={false} className="dark:text-white">
                    Inactive
                  </Radio>
                </Radio.Group>
              </Form.Item>


              <Form.Item
                label={<span className="text-lg dark:text-white">Role</span>}
                name="role"
                rules={[
                  {
                    required: true,
                    message: "Please mark to at least one role!",
                  },
                ]}
              >
                <Radio.Group>
                  {roles && roles?.data.map(role => {
                    // if (role.role === 'superAdmin') {
                    //   return null;
                    // }
                    return (
                      <Radio key={role._id} className="dark:text-white" disabled={auth && auth.user.role === ('superAdmin')} value={role.role}>{role.role.toUpperCase()}</Radio>
                    )
                  })}
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  size="large"
                  className="w-full dark:text-white text-blue-600 hover:text-white"
                  type="primary"
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </AdminLayout>
  );
}
