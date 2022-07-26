import { Avatar, Button, DatePicker, Form, Input, Radio, Select } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import axiosInstance from "../../utils/AxiosInstance";
import Fetcher from "../../utils/Fetcher";
import Loader from "../../components/Loader/Index";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import moment from "moment";

export default function Details() {
  const { id } = useParams();
  const { auth } = useGlobalContext();
  const { data: details } = useSWR(`/users/${id}`, Fetcher);
  const { data: roles, error: roleError } = useSWR("/roles", Fetcher);
  const { data: divisionArray } = useSWR("/locations?q=divisions", Fetcher);

  let divisions = divisionArray && divisionArray.data;
  let userDetails = details && details.data;

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
      name: userDetails && userDetails !== "undefined" && userDetails.name,
    },
  ];

  const saveUserDetails = async (values) => {
    try {
      values.isActive = values.isActive ?? userDetails.isActive;
      values.role = values.role ?? userDetails.role;
      await axiosInstance.put(`/users/${id}`, values);
      toast.success("User details updated successfully!");
      mutate(`/users/${id}`, values);
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const dateFormat = "YYYY/MM/DD";

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="py-5">
        {userDetails && userDetails !== "undefined" ? (
          <div className="w-96 mx-auto">
            <div className="text-center mb-5">
              <Avatar
                alt={userDetails.name}
                src={userDetails.avatarUrl}
                className="dark:text-gray-900"
                size={50}
              >
                {userDetails.name.split("")[0].toUpperCase()}
              </Avatar>
            </div>
            <Form
              name="user-details"
              layout="vertical"
              initialValues={{
                name: userDetails.name,
                email: userDetails.email,
                phoneNumber: userDetails.phoneNumber,
                role: userDetails.role,
                dateOfBirth:
                  userDetails.dateOfBirth !== ""
                    ? moment(userDetails.dateOfBirth)
                    : "",
                location: userDetails.location,
                isActive: userDetails.isActive,
                avatarUrl: userDetails.avatarUrl,
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
                  <span className="text-lg dark:text-white">
                    Select Date of Birth
                  </span>
                }
                name="dateOfBirth"
                rules={[
                  { required: true, message: "Please input date of birth!" },
                ]}
              >
                <DatePicker
                  format={dateFormat}
                  size="large"
                  className="w-full"
                />
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
                  showSearch
                  allowClear
                  placeholder="Select a division"
                  size="large"
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
                    <Select.Option
                      key={division.name + "-" + division._id}
                      value={division.name}
                    >
                      {division.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="avatarUrl"
                label={
                  <label className="dark:text-white text-lg">Avatar Url</label>
                }
              >
                <Input size="large" allowClear placeholder="Enter image url" />
              </Form.Item>

              {auth?.user.role === "superadmin" && (
                <>
                  <Form.Item
                    label={
                      <span className="text-lg dark:text-white">
                        User Status
                      </span>
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
                  {!roleError?.message && (
                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">Role</span>
                      }
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
                          roles?.data.map((role) => {
                            // if (role.role === 'superAdmin') {
                            //   return null;
                            // }
                            return (
                              <Radio
                                key={role._id}
                                className="dark:text-white"
                                disabled={
                                  userDetails &&
                                  userDetails.role === "superadmin"
                                }
                                value={role.role}
                              >
                                {role.role.toUpperCase()}
                              </Radio>
                            );
                          })}
                      </Radio.Group>
                    </Form.Item>
                  )}
                </>
              )}
              <Form.Item>
                <Button
                  htmlType="submit"
                  size="large"
                  className="w-full"
                  type="primary"
                  disabled={
                    userDetails?.role === "superadmin" &&
                    auth?.user.role !== "superadmin"
                  }
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
    </>
  );
}
