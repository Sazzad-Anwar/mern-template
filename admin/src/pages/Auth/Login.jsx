import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MdEmail } from "react-icons/md";
import Typical from "react-typical";
import { FiKey } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/AxiosInstance";
import useSWR from "swr";
import Fetcher from "../../utils/Fetcher";
import DarkModeToggler from "../../components/DarkModeToggler/Index";
import { APP_MOTTO_1, APP_MOTTO_2, APP_NAME } from "../../assets/app.config";

const Login = () => {
  const { auth, authDispatch } = useGlobalContext();
  const { data } = useSWR("/users/hasSuperAdmin", Fetcher);
  const { data: appConfig } = useSWR("/app-config", Fetcher);
  const { data: roles } = useSWR("/roles", Fetcher);
  const [app, setApp] = useState({});

  useEffect(() => {
    if (appConfig && appConfig.data) {
      setApp(appConfig.data[0]);
    }
  }, [appConfig]);

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

      let userCredentials = {
        ue: email,
        up: password,
      };

      if (remember) {
        localStorage.setItem("__uc", JSON.stringify(userCredentials));
        localStorage.setItem("remember", remember);
      } else {
        localStorage.removeItem("__uc");
        localStorage.removeItem("remember", remember);
      }
    } catch (error) {
      toast.error(error.response?.data.message ?? error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    toast.error(errorInfo);
  };

  if (!data?.hasSuperAdmin || (!auth.user && !data?.hasSuperAdmin)) {
    return <Navigate to="/registration" />;
  }

  if (
    auth.user?.role &&
    roles &&
    !roles.data.find(
      (role) => role.role === auth.user.role || auth.user.role === "user"
    )
  ) {
    toast.error("Only authorized users can have access!");
    return <Navigate to="/login" />;
  }

  if (auth.user) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <div className="absolute right-5 top-5 z-10">
          <DarkModeToggler hideButton />
        </div>
        <div className="relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <div className="relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4">
            <img
              className="h-full w-auto brightness-50"
              src={app?.image ? app.image : "/login-image.png"}
              alt="login"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md">
              <img className="h-20 w-20" src="/logo192.png" alt="logo" />
              <h1 className="text-white xl:text-5xl">
                {app?.name ?? APP_NAME}
              </h1>
              <div className="text-2xl text-white">
                <Typical
                  steps={
                    app?.motto?.split(".").length
                      ? [
                          app?.motto?.split(".")[0],
                          2000,
                          app?.motto?.split(".")[0],
                          3000,
                        ]
                      : app?.motto
                      ? [app?.motto, 2000]
                      : [APP_MOTTO_1, 2000, APP_MOTTO_2, 3000]
                  }
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
            </div>
          </div>

          <div className="flex h-full w-full items-center dark:bg-dark px-5 pt-10 backdrop-blur-lg dark:lg:bg-dark">
            <div className="w-full">
              <h1 className="flex items-center justify-center text-2xl font-semibold dark:text-white">
                <div className="rounded-full dark:bg-gray-600 bg-gray-200 flex justify-center items-center p-2">
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
                  email: JSON.parse(localStorage.getItem("__uc"))?.ue || "",
                  password: JSON.parse(localStorage.getItem("__uc"))?.up || "",
                }}
              >
                <Form.Item
                  label={
                    <h1 className="text-lg font-semibold dark:text-white">
                      Email
                    </h1>
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

                <Form.Item
                  label={
                    <h1 className="text-lg font-semibold dark:text-white">
                      Password
                    </h1>
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
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="dark:text-white">Remember me</Checkbox>
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
                  <p className="normal-transition text-center text-base dark:text-gray-300 underline dark:hover:text-white">
                    Forgot Password
                  </p>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
