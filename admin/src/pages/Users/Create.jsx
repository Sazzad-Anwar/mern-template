import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import React, { useId } from "react";
import { FiKey } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR from "swr";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import { LOGOUT } from "../../context/constants/AuthConstants";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import axiosInstance from "../../utils/AxiosInstance";
import Fetcher from "../../utils/Fetcher";

export default function Create() {
  const { authDispatch } = useGlobalContext();
  const navigate = useNavigate();
  const { data: roleArray } = useSWR("/roles", Fetcher);
  const { data: divisionArray } = useSWR("/locations", Fetcher);

  let roles = roleArray && roleArray.data;
  let divisions = divisionArray && divisionArray.data;

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
      name: "Create User",
    },
  ];

  const saveUserDetails = async (values) => {
    try {
      await axiosInstance.post("/auth/registration", values);
      toast.success("User created successfully!");
      authDispatch({ type: LOGOUT });
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="py-5">
        <div className="w-96 mx-auto">
          <Form
            name="user-details"
            layout="vertical"
            className="ml-5 grid grid-cols-1 gap-2"
            onFinish={saveUserDetails}
          >
            <Form.Item
              label={<span className="text-lg dark:text-white">Name</span>}
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input size="large" placeholder="Name" />
            </Form.Item>

            <Form.Item
              label={<span className="text-lg dark:text-white">Email</span>}
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type={"email"} size="large" placeholder="Email" />
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
              <Input type={"tel"} size="large" placeholder="Phone" />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-lg dark:text-white">
                  Select Date of Birth
                </span>
              }
              name="dateOfBirth"
              rules={[
                { required: true, message: "Please input date of birth!" },
              ]}
            >
              <DatePicker size="large" className="w-full" />
            </Form.Item>

            <Form.Item
              name="location"
              label={
                <label className="dark:text-white text-lg">
                  Select Division
                </label>
              }
            >
              <Select
                value={divisions}
                allowClear
                placeholder="Select a division"
                size="large"
                showSearch
                filterOption={(input, option) =>
                  option.children.includes(input)
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {divisions?.map((division) => (
                  <Select.Option key={useId} value={division.name}>
                    {division.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={
                <h1 className="text-lg font-semibold dark:text-white">
                  Password
                </h1>
              }
              name="password"
              dependencies={["confirmPassword"]}
              hasFeedback
              className="w-full"
              rules={[
                { required: true, message: "Please input your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("confirmPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                size="large"
                prefix={<FiKey size={25} />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              label={
                <h1 className="text-lg font-semibold dark:text-white">
                  Confirm Password
                </h1>
              }
              dependencies={["password"]}
              hasFeedback
              name="confirmPassword"
              className="w-full"
              rules={[
                { required: true, message: "Please input your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                size="large"
                prefix={<FiKey size={25} />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-lg dark:text-white">User Status</span>
              }
              name="isActive"
              rules={[
                { required: true, message: "Please select user status!" },
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
                {roles &&
                  roles?.map((role) => {
                    if (role.role === "superadmin") {
                      return null;
                    } else {
                      return (
                        <Radio
                          key={role._id}
                          className="dark:text-white"
                          value={role.role}
                        >
                          {role.role.toUpperCase()}
                        </Radio>
                      );
                    }
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
      </div>
    </>
  );
}
