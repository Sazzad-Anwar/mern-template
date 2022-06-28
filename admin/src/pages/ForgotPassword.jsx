import React from "react";
import { Form, Input, Button } from "antd";
import { MdEmail } from "react-icons/md";
import Typical from "react-typical";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import Toast from "../components/Toast";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const onFinish = ({ email }) => {
    navigate("/");
    toast.success("A password reset link has been sent to your email");
    console.log("Success:", email);
  };

  const onFinishFailed = (errorInfo) => {
    toast.error("errorInfo");
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {/* <Toast alertType="error" message="Email is not found" show={show} setShow={setShow} /> */}
      <div className="relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4">
          <img
            className="h-full w-auto brightness-50"
            src="/login-image.png"
            alt="login"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md">
            <img className="h-20 w-20" src="/logo192.png" alt="logo" />
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
              <div className="rounded-full bg-gray-600 p-3">
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
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
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
    </>
  );
}
