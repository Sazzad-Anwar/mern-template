import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MdEmail } from "react-icons/md";
import Typical from "react-typical";
import { FiKey } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContextProvider";
import { toast } from "react-toastify";
import axiosInstance from "../components/AxiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const { auth, authDispatch } = useGlobalContext();

  const onFinish = async ({ email, password, remember }) => {
    try {
      let { data } = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      });

      authDispatch({
        type: "LOGIN",
        payload: data.data.accessToken,
      });

      if (remember) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("remember", remember);
      } else {
        localStorage.removeItem("email", email);
        localStorage.removeItem("password", password);
        localStorage.removeItem("remember", remember);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (
      (auth.user && auth.user.role.includes("admin")) ||
      (auth.user && auth.user.role.includes("superAdmin"))
    ) {
      navigate("/");
    } else if (
      auth.user &&
      (!auth.user.role.includes("admin") ||
        !auth.user.role.includes("superAdmin"))
    ) {
      navigate("/login");
      toast.error("Only admins and super admins can have access!");
    }
  }, [auth.user, navigate]);

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
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="text-white">Remember me</Checkbox>
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
};

export default Login;
