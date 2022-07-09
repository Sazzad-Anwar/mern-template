import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Avatar, Button, Table, Tag, Input } from "antd";
import Fetcher from "../../utils/Fetcher";
import useSWR, { mutate } from "swr";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/AxiosInstance";
import { Popconfirm } from "antd";
import Loader from "../../components/Loader/Index";
const Layout = lazy(() => import("../../layouts/AdminLayout/Index"));

const { Search } = Input;

export default function Users() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data } = useSWR(`/users?page=${page}&pageSize=${pageSize}`, Fetcher);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data?.data?.map((user) => ({ ...user, key: user._id })) ?? []);
  }, [data]);

  const deleteUser = async (id) => {
    await axiosInstance.delete(`/users/${id}`);
    toast.success("User deleted successfully!");
    mutate(
      "/users",
      users.filter((user) => user._id !== id)
    );
  };

  const cancel = (e) => {
    console.log(e);
  };

  const tableColumn = [
    {
      title: "Image",
      dataIndex: "avatarUrl",
      key: "avatarUrl",
      render: (avatarUrl, record) => {
        if (avatarUrl !== "") {
          return (
            <img
              src={avatarUrl}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          );
        } else {
          return (
            <Avatar className="dark:text-gray-900">
              {record.name.split("")[0].toUpperCase()}
            </Avatar>
          );
        }
      },
    },
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => <Link to={`/users/${_id}`}>{_id}</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => {
        return (
          <div>
            <Tag color={role === "superAdmin" ? "blue" : "green"} key={role}>
              {role}
            </Tag>
          </div>
        );
      },
      filters: [
        { text: "Super Admin", value: "superAdmin" },
        { text: "Admin", value: "admin" },
        { text: "User", value: "user" },
      ],
      onFilter: (value, record) => record.role.includes(value),
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (active) => {
        if (active) {
          return <Tag color="green">Yes</Tag>;
        } else {
          return <Tag color="red">No</Tag>;
        }
      },
      filters: [
        { text: "Active", value: true },
        { text: "Inactive", value: false },
      ],
      onFilter: (value, record) => record.isActive === value,
    },
    {
      title: "Joined At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => (
        <span>
          {new Date(createdAt).toLocaleDateString("en-US", {
            dateStyle: "full",
          })}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className="flex items-center">
          <Link to={`/users/${record._id}`}>

            <Button
              type="primary"
              shape="default"
              className="mr-4 text-blue-600 hover:text-white"
              icon={
                <div className="flex justify-center items-center">
                  <FiEdit3 />
                </div>
              }
            />
          </Link>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => deleteUser(record._id)}
            onCancel={cancel}
            disabled={record.role === "superAdmin"}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="default"
              shape="default"
              className="mr-4"
              icon={
                <div className="flex justify-center items-center">
                  <AiFillDelete />
                </div>
              }
              disabled={record.role === "superAdmin"}
              danger
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/users",
      name: "Users",
    },
  ];

  const onSearch = async (value) => {
    const { data: searchData } = await axiosInstance.get(`/users?q=${value}`);
    let searchUsers = searchData.data.map((user) => ({
      ...user,
      key: user._id,
    }));
    setUsers(searchUsers);
  };

  return (
    <Suspense fallback={<Loader />}>
      <Layout breadcrumbs={breadcrumbs}>
        <div className="pt-3">
          <div className="flex justify-end">
            <div className="mb-4">
              <Search
                allowClear
                size="large"
                className="w-full lg:w-96 lg:ml-auto search-input"
                placeholder="Search..."
                onSearch={onSearch}
              />
            </div>
          </div>
          <Table
            loading={!users.length}
            columns={tableColumn}
            dataSource={users}
            pagination={{
              showSizeChanger: true,
              total: data && data.totalSize,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
              current: page,
              pageSize,
              className: 'dark:text-white',
              hideOnSinglePage: true,
              responsive: true,
              onChange: async (page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              }
            }}
          />
        </div>
      </Layout>
    </Suspense>
  );
}
