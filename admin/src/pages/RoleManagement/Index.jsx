import React, { Suspense, lazy, useState } from "react";
import useSWR, { mutate } from "swr";
import Fetcher from "../../utils/Fetcher";
import Loader from "../../components/Loader/Index";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/AxiosInstance";
import { Button, Checkbox, Form, Input, Tag } from "antd";
import Modal from "../../components/Modal/Index";
import { ImBin } from "react-icons/im";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { Navigate } from "react-router-dom";
const Layout = lazy(() => import("../../layouts/AdminLayout/Index"));

function RoleManagement() {
  const { auth } = useGlobalContext();
  const { data: roleArray } = useSWR("/roles", Fetcher);
  const { data: apis } = useSWR("/getAPI", Fetcher);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(
    (roleArray && roleArray.data.filter(role => role.role !== 'superAdmin')[0]) ?? null
  );
  const [selectedRoleAccessRoutes, setSelectedRoleAccessRoutes] = useState([]);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/role-management",
      name: "Role Management",
    },
  ];

  const createRole = async (values) => {
    try {
      await axiosInstance.post(`/roles`, values);
      toast.success("Role added successfully!");
      mutate("/roles");
      values.role = "";
      setShowModal(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setRole = (role) => {
    setSelectedRole(role);
    setSelectedRoleAccessRoutes(role.accessRoutes);
  };

  const addRoute = async (selectedApi, e) => {
    e.target.checked = !e.target.checked;
    if (selectedRoleAccessRoutes?.includes(selectedApi)) {
      setSelectedRoleAccessRoutes(
        selectedRoleAccessRoutes.filter((route) => route !== selectedApi)
      );
      try {
        await axiosInstance.put(`/roles/${selectedRole._id}`, {
          role: selectedRole.role,
          accessRoutes: selectedRoleAccessRoutes.filter(
            (route) => route !== selectedApi
          ),
        });
        toast.warning("Route removed successfully!");
        mutate("/roles");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      setSelectedRoleAccessRoutes((selectedRoleAccessRoutes) => [
        ...selectedRoleAccessRoutes,
        selectedApi,
      ]);
      try {
        await axiosInstance.put(`/roles/${selectedRole._id}`, {
          role: selectedRole.role,
          accessRoutes: [...selectedRoleAccessRoutes, selectedApi],
        });
        toast.success("Route added successfully!");
        mutate("/roles");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const deleteRole = async (role) => {
    try {
      await axiosInstance.delete(`/roles/${role._id}`);
      toast.success("Role deleted successfully!");
      mutate("/roles");
      setSelectedRole(null);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (auth && !auth.user.role.includes("superAdmin")) {
    return <Navigate to="/" />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Layout breadcrumbs={breadcrumbs}>
        <div className="mt-5 flex flex-col lg:flex-row items-start">
          <div className="w-full h-full lg:w-52">
            {roleArray &&
              roleArray?.data.map((role) => {
                if (role.role === "superAdmin") {
                  return null;
                }
                return (
                  <div
                    key={role._id}
                    className="flex justify-between items-center pr-3 py-2 "
                  >
                    <Checkbox
                      className="dark:text-white font-semibold"
                      checked={selectedRole?._id === role._id}
                      onChange={() => setRole(role)}
                    >
                      {role.role.toUpperCase()}
                    </Checkbox>

                    <button
                      onClick={() => deleteRole(role)}
                      className="p-2.5 group flex justify-center items-center hover:bg-deepDark rounded-full normal-transition"
                    >
                      <ImBin
                        size={20}
                        className="text-red-600 group-hover:text-white"
                      />
                    </button>
                  </div>
                );
              })}

            <Button
              type="primary"
              className="mt-5 dark:text-white lg:w-full text-blue-600 hover:text-white"
              onClick={() => setShowModal(true)}
            >
              Add new role
            </Button>
          </div>
          <div className="border-0 lg:border-t-0 lg:border-l pt-5 lg:pt-0 lg:pl-5 dark:border-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 2xl:gap-6 mt-4 lg:ml-5">
            {apis?.data.map(({ api, _id }) => (
              <Checkbox
                key={_id}
                disabled={selectedRole === null}
                className="dark:text-white mx-0"
                checked={selectedRoleAccessRoutes.includes(api)}
                onChange={(e) => addRoute(api, e)}
              >
                <Tag
                  key={api}
                  color={
                    api.startsWith("GET")
                      ? "green"
                      : api.startsWith("POST")
                        ? "purple"
                        : api.startsWith("PUT")
                          ? "blue"
                          : "red"
                  }
                  className="text-base"
                >
                  {api}
                </Tag>
              </Checkbox>
            ))}
          </div>
        </div>

        {/* Create role modal */}
        <Modal
          showModal={showModal}
          toggleModal={() => setShowModal(!showModal)}
        >
          <div className="px-5 py-5">
            <h1 className="dark:text-white text-xl font-semibold">
              Add new role
            </h1>
            <Form
              name="Add role"
              onFinish={createRole}
              layout="vertical"
              className="mt-5"
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
        </Modal>
      </Layout>
    </Suspense>
  );
}

export default RoleManagement;
