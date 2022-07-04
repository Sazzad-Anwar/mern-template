import jwtDecode from 'jwt-decode';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button } from "antd";
import { FiKey } from "react-icons/fi";
import Typical from "react-typical";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import Toast from "../components/Toast";
import { toast } from "react-toastify";
import { APP_MOTTO_1, APP_MOTTO_2, APP_NAME } from "../../app.config";
import axiosInstance from '../../utils/AxiosInstance';

export default function Index() {
    const { token } = useParams();
    const decoded = jwtDecode(token);
    console.log(decoded);

    const navigate = useNavigate();

    const onFinish = async ({ password, confirmPassword }) => {
        try {
            await axiosInstance.post(`/auth/resetPassword/${decoded.email}`, { password });
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const onFinishFailed = (errorInfo) => {
        toast.error("errorInfo");
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <div className="relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4">
                <img
                    className="h-full w-auto brightness-50"
                    src="/login-image.png"
                    alt="login"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md">
                    <img className="h-20 w-20" src="/logo192.png" alt="logo" />
                    <h1 className="text-white xl:text-5xl">{APP_NAME}</h1>
                    <div className="text-2xl text-white">
                        <Typical
                            steps={[
                                APP_MOTTO_1,
                                2000,
                                APP_MOTTO_2,
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
                        <div className="rounded-full bg-gray-600 p-3 flex justify-center items-center">
                            <AiFillLock size={30} />
                        </div>
                    </h1>
                    {(decoded.exp * 1000) < Date.now() ?
                        <div className='text-center'>
                            <h1 className="text-white mt-5 text-xl md:text-3xl">
                                This link has expired
                            </h1>
                            <Link to="/forgot-password">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="mt-5 w-full"
                                    size="large"
                                >
                                    Get a new token
                                </Button>
                            </Link>
                        </div>
                        : <Form
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            name="basic"
                        >
                            <Form.Item
                                label={
                                    <h1 className="text-lg font-semibold text-white">Password</h1>
                                }
                                name="password"
                                dependencies={['confirmPassword']}
                                hasFeedback
                                className="mt-10 w-full"
                                rules={[
                                    { required: true, message: "Please input your password!" },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('confirmPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
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
                                    <h1 className="text-lg font-semibold text-white">Confirm Password</h1>
                                }
                                dependencies={['password']}
                                hasFeedback
                                name="confirmPassword"
                                className="mt-10 w-full"
                                rules={[
                                    { required: true, message: "Please input your password!" },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
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

                            <Link to="/login">
                                <p className="normal-transition text-center text-base text-gray-300 underline hover:text-white">
                                    Back to login
                                </p>
                            </Link>
                        </Form>
                    }

                </div>
            </div>
        </div>
    )
}
