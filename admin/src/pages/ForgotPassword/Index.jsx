import React from "react";
import { Form, Input, Button } from "antd";
import { MdEmail } from "react-icons/md";
import Typical from "react-typical";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Toast from "../components/Toast";
import { toast } from "react-toastify";
import { APP_MOTTO_1, APP_MOTTO_2, APP_NAME } from "../../app.config";
import axiosInstance from "../../utils/AxiosInstance";

export default function ForgotPassword() {
  const onFinish = async ({ email }) => {
    try {
      await axiosInstance.get(`/auth/resetPassword/${email}`);
      toast.success("Password reset link has been sent to your email");
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
              steps={[APP_MOTTO_1, 2000, APP_MOTTO_2, 3000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
      </div>

      <div className="flex h-full w-full items-center bg-dark px-5 pt-10 backdrop-blur-lg lg:bg-dark">
        <div className="w-full">
          <h1 className="flex items-center justify-center text-2xl font-semibold text-white">
            <div className="rounded-full flex justify-center items-center bg-gray-600 p-3">
              <AiFillLock size={30} />
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
        </div>
      </div>
    </div>
  );
}
