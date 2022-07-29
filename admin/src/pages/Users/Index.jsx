import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Avatar, Button, Table, Tag, Input, Tooltip } from "antd";
import Fetcher from "../../utils/Fetcher";
import useSWR, { mutate } from "swr";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/AxiosInstance";
import { Popconfirm } from "antd";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import Error from "../../components/Error/Index";
import CapitalLetterWord from "../../utils/CapitalLetterWord";

const { Search } = Input;

export default function Users() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data: rolesArray } = useSWR("/roles", Fetcher);
  const { data, error } = useSWR(
    `/users?page=${page}&pageSize=${pageSize}`,
    Fetcher
  );
  const [users, setUsers] = useState([]);
  const { auth } = useGlobalContext();

  let roles =
    rolesArray &&
    rolesArray.data.map((role) => {
      return {
        text: CapitalLetterWord(role.role),
        value: role.role,
      };
    });

  useEffect(() => {
    setUsers(data?.data?.map((user) => ({ ...user, key: user._id })) ?? []);
  }, [data]);

  const deleteUser = async (id) => {
    try {
      await axiosInstance.delete(`/users/${id}`);
      toast.success("User deleted successfully!");
      setUsers(users.filter((user) => user._id !== id));
      mutate(`/users?page=${page}&pageSize=${pageSize}`);
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const tableColumn = [
    {
      title: "Image",
      dataIndex: "avatarUrl",
      key: "avatarUrl",
      render: (avatarUrl, record) => {
        return (
          <Avatar
            src={avatarUrl}
            alt={record.name}
            className="dark:text-gray-900"
            size={30}
          >
            {record.name.split("")[0].toUpperCase()}
          </Avatar>
        );
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
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => {
        return (
          <div>
            <Tag color={role === "superadmin" ? "blue" : "green"} key={role}>
              {role}
            </Tag>
          </div>
        );
      },
      filters: roles,
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
              type="ghost"
              shape="default"
              className="mr-4 dark:text-white dark:hover:text-blue-400"
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
            disabled={
              record.role === "superadmin" || record._id === auth?.user._id
            }
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="ghost"
              shape="default"
              className="mr-4 dark:text-white dark:hover:text-blue-400"
              icon={
                <div className="flex justify-center items-center">
                  <AiFillDelete />
                </div>
              }
              disabled={record.role === "superadmin"}
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
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="pt-3">
        <div className="flex justify-end">
          <Tooltip title="Add User">
            <Button
              onClick={() => navigate("/create-user")}
              type="ghost"
              shape="default"
              className="mr-3 flex py-5 items-center shadow-md dark:bg-deepDark dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
            >
              <span className="">Create User</span>
            </Button>
          </Tooltip>
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
        {error ? (
          <Error
            error={
              error.response?.data.message
                ? error.response.data.message
                : error.message
            }
          />
        ) : (
          <Table
            loading={!users.length}
            columns={tableColumn}
            dataSource={users}
            pagination={{
              showSizeChanger: true,
              total: data && data.totalSize,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
              current: page,
              pageSize,
              className: "dark:text-white",
              hideOnSinglePage: true,
              responsive: true,
              onChange: async (page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              },
            }}
          />
        )}
      </div>
    </>
  );
}
