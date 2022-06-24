import React from "react";
import { Form, Input, Button } from "antd";
import { MdEmail } from "react-icons/md";
import Typical from "react-typical";
import { FiKey } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContextProvider";
import { toast } from "react-toastify";
import axiosInstance from "../components/AxiosInstance";
import useSWR from 'swr'
import Fetcher from "../components/Fetcher";
import { BsPersonCircle, BsTelephoneFill } from "react-icons/bs";
import { REGISTRATION } from "../context/constants/AuthConstants";

export default function Registration() {
    const { auth, authDispatch } = useGlobalContext();
    const { data } = useSWR('/users/hasSuperAdmin', Fetcher)

    const onFinish = async ({ name, email, password, confirmPassword, phoneNumber }) => {
        try {
            if (password === confirmPassword) {
                let { data } = await axiosInstance.post(`/auth/registration`, {
                    name,
                    phoneNumber,
                    email,
                    password,
                    role: 'superAdmin'
                });
                await axiosInstance.post('/roles', { role: 'superAdmin', accessRoutes: ['*'] })
                authDispatch({
                    type: REGISTRATION,
                    payload: data.data.accessToken,
                });
            } else {
                toast.error("Password does not match")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    if (auth.user && (auth.user.role === ('admin') || auth.user.role === ('superAdmin'))) {
        return <Navigate to="/" />
    }

    if (data && data?.hasSuperAdmin) {
        return <Navigate to="/login" />
    }

    return (
        <div className="relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <div className="relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4">
                <img
                    className="h-full w-auto brightness-50"
                    src="/login-image.png"
                    alt="login"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md">
                    <img className="h-20 w-20 animate-spin" src="/logo192.png" alt="logo" />
                    <h1 className="text-white xl:text-5xl">Admin Panel</h1>
                    <div className="text-2xl text-white">
                        <Typical
                            steps={[
                                "Take your app access without any hassle",
                                2000,
                                "Get a fast & smooth user experience.",
                                3000,
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>
                </div>
            </div>

            <div className="flex h-full w-full items-center bg-dark px-5 pt-10 backdrop-blur-lg lg:bg-dark">
                <div className="w-full">
                    <h1 className="flex items-center justify-center text-2xl font-semibold text-white">
                        <div className="rounded-full bg-gray-600 flex justify-center items-center p-2">
                            <AiFillLock size={30} className="m-0 p-0" />
                        </div>
                    </h1>
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        name="basic"
                        initialValues={{
                            remember: localStorage.getItem("remember") ? true : false,
                            email: localStorage.getItem("email") || "",
                            password: localStorage.getItem("password") || "",
                        }}
                    >
                        <Form.Item
                            label={
                                <h1 className="text-lg font-semibold text-white">Name</h1>
                            }
                            name="name"
                            className="mt-5 w-full"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <Input
                                type="text"
                                size="large"
                                prefix={<BsPersonCircle size={25} />}
                                placeholder="Name"
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <h1 className="text-lg font-semibold text-white">Email</h1>
                            }
                            name="email"
                            className="mt-5 w-full"
                            rules={[{ required: true, message: "Please input your email!" }]}
                        >
                            <Input
                                type="email"
                                size="large"
                                prefix={<MdEmail size={25} />}
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <h1 className="text-lg font-semibold text-white">Phone Number</h1>
                            }
                            name="phoneNumber"
                            className="mt-5 w-full"
                            rules={[{ required: true, message: "Please input your phone number!" }]}
                        >
                            <Input
                                type="tel"
                                size="large"
                                prefix={<BsTelephoneFill size={25} />}
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <h1 className="text-lg font-semibold text-white">Password</h1>
                            }
                            name="password"
                            className="mt-10 w-full"
                            rules={[
                                { required: true, message: "Please input your password!" },
                            ]}
                        >
                            <Input.Password
                                type="password"
                                size="large"
                                prefix={<FiKey size={25} />}
                                placeholder="password"
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <h1 className="text-lg font-semibold text-white">Confirm Password</h1>
                            }
                            name="confirmPassword"
                            className="mt-10 w-full"
                            rules={[
                                { required: true, message: "Please input your confirm password!" },
                            ]}
                        >
                            <Input.Password
                                type="password"
                                size="large"
                                prefix={<FiKey size={25} />}
                                placeholder="password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="mt-5 w-full"
                                size="large"
                            >
                                Submit
                            </Button>
                        </Form.Item>

                        <Link to="/forgot-password">
                            <p className="normal-transition text-center text-base text-gray-300 underline hover:text-white">
                                Forgot Password
                            </p>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
}
