import React, { Suspense, lazy, useState } from "react";
import useSWR, { mutate } from "swr";
import Fetcher from "../components/Fetcher";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import axiosInstance from "../components/AxiosInstance";
import { Button, Checkbox, Form, Input, Tag } from "antd";
import Modal from '../components/Modal';
import { ImBin } from "react-icons/im";
import { useGlobalContext } from "../context/GlobalContextProvider";
import { Navigate } from "react-router-dom";
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));

function RoleManagement() {
    const { auth } = useGlobalContext();
    const { data: roleArray } = useSWR('/roles', Fetcher);
    const { data: apis } = useSWR('/getAPI', Fetcher);
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(roleArray && roleArray.data[0]);
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
            mutate('/roles');
            values.role = "";
            setShowModal(false);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const setRole = (role) => {
        setSelectedRole(role);
        setSelectedRoleAccessRoutes(role.accessRoutes);
    }

    const addRoute = async (selectedApi, e) => {
        e.target.checked = !e.target.checked;
        if (selectedRoleAccessRoutes?.includes(selectedApi)) {
            setSelectedRoleAccessRoutes(selectedRoleAccessRoutes.filter(route => route !== selectedApi));
            try {
                await axiosInstance.put(`/roles/${selectedRole._id}`, { role: selectedRole.role, accessRoutes: selectedRoleAccessRoutes.filter(route => route !== selectedApi) });
                toast.warning("Route removed successfully!");
                mutate('/roles');
            } catch (error) {
                toast.error(error.response.data.message);
            }
        } else {
            setSelectedRoleAccessRoutes(selectedRoleAccessRoutes => [...selectedRoleAccessRoutes, selectedApi]);
            try {
                await axiosInstance.put(`/roles/${selectedRole._id}`, { role: selectedRole.role, accessRoutes: [...selectedRoleAccessRoutes, selectedApi] });
                toast.success("Route added successfully!");
                mutate('/roles');
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    }

    const deleteRole = async (role) => {
        try {
            await axiosInstance.delete(`/roles/${role._id}`);
            toast.success("Role deleted successfully!");
            mutate('/roles');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    if (auth && !auth.user.role.includes("superAdmin")) {
        return <Navigate to="/" />
    }

    return (
        <Suspense fallback={<Loader />}>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <div className="container mx-auto mt-5 flex flex-col lg:flex-row items-start">
                    <div className="w-full h-full lg:w-64 pr-5 border-r dark:border-gray-600">
                        {roleArray && roleArray?.data.map(role => {
                            if (role.role === 'superAdmin') {
                                return null;
                            }
                            return (
                                <div key={role._id} className="flex justify-between items-center pr-3 py-2 ">
                                    <Checkbox className="dark:text-white font-semibold" checked={selectedRole?._id === role._id} onChange={() => setRole(role)}>
                                        {role.role.toUpperCase()}
                                    </Checkbox>

                                    <button onClick={() => deleteRole(role)} className="p-2.5 group flex justify-center items-center hover:bg-deepDark rounded-full normal-transition">
                                        <ImBin size={20} className="text-red-600 group-hover:text-white" />
                                    </button>
                                </div>
                            )
                        })}


                        <Button type="primary" className="mt-5 dark:text-white text-blue-600 hover:text-white" onClick={() => setShowModal(true)}>Add new</Button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 px-5">
                        {apis?.data.map(({ api, _id }) => (
                            <Checkbox key={_id} disabled={!selectedRole?._id} className="dark:text-white" checked={selectedRoleAccessRoutes.includes(api)} onChange={(e) => addRoute(api, e)}>
                                <Tag key={api} color="green" className="text-base">{api}</Tag>
                            </Checkbox>
                        ))}
                    </div>
                </div>

                {/* Create role modal */}
                <Modal showModal={showModal} toggleModal={() => setShowModal(!showModal)}>
                    <div className="px-5 py-5">
                        <h1 className="dark:text-white text-xl font-semibold">Add new role</h1>
                        <Form
                            name="Add role"
                            onFinish={createRole}
                            layout="vertical"
                            className="mt-5"
                        >
                            <Form.Item
                                label={<label className="dark:text-white text-lg">Role</label>}
                                name="role"
                                rules={[{ required: true, message: 'Please input role!' }]}
                            >
                                <Input size="large" allowClear />
                            </Form.Item>

                            <Button htmlType="submit" type="primary" className="dark:text-white text-blue-600 hover:text-white">Save</Button>
                        </Form>
                    </div>
                </Modal>

                {/* Add route modal */}
                {/* <Modal showModal={showAddRouteModal} toggleModal={() => setShowAddRouteModal(!showAddRouteModal)}>
                    <div className="px-5 py-5">
                        <h1 className="dark:text-white text-xl font-semibold">Add new route access</h1>
                        <Form
                            name="Add new accessRoute"
                            onFinish={addRoutes}
                            layout="vertical"
                            className="mt-5"
                            initialValues={{
                                accessRoutes: selectedRoleAccessRoutes && selectedRoleAccessRoutes,
                            }}
                        >
                            <Form.Item>
                                {apis?.data.map(({ api, _id }) => (
                                    <Checkbox key={_id} className="dark:text-white" checked={selectedRoleAccessRoutes.includes(api)} onChange={(e) => addRoute(api, e)}>{api}</Checkbox>
                                ))}
                            </Form.Item>
                            <Button htmlType="submit" type="primary" className="dark:text-white text-blue-600 hover:text-white">Save</Button>
                        </Form>
                    </div>
                </Modal> */}
            </AdminLayout>
        </Suspense>
    )
}

export default RoleManagement