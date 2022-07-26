import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { FiKey } from "react-icons/fi";
import Typical from "react-typical";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { APP_MOTTO_1, APP_MOTTO_2, APP_NAME } from "../../assets/app.config";
import axiosInstance from "../../utils/AxiosInstance";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import Fetcher from "../../utils/Fetcher";
import useSWR from "swr";

export default function ResetPassword() {
  const { token } = useParams();
  const { auth } = useGlobalContext();
  const decoded = jwtDecode(token);
  const [isTokenInvalid, setIsTokenInvalid] = useState(false);
  const { data: appConfig } = useSWR("/app-config", Fetcher);
  const [app, setApp] = useState({});

  useEffect(() => {
    if (appConfig && appConfig.data) {
      setApp(appConfig.data[0]);
    }
  }, [appConfig]);

  const navigate = useNavigate();

  useEffect(() => {
    let interval = setInterval(() => {
      if (decoded.exp < Date.now() / 1000) {
        toast.error("Token expired");
        setIsTokenInvalid(true);
        clearInterval(interval);
      }
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, [decoded.exp, navigate]);

  const onFinish = async ({ password, confirmPassword }) => {
    try {
      await axiosInstance.post(`/auth/resetPassword/${decoded.email}`, {
        password,
      });
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    toast.error("errorInfo");
  };

  if (auth.user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <div className="relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4">
          <img
            className="h-full w-auto brightness-50"
            src={app?.image ? app.image : "/login-image.png"}
            alt="login"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md">
            <img className="h-20 w-20" src="/logo192.png" alt="logo" />
            <h1 className="text-white xl:text-5xl">{app?.name ?? APP_NAME}</h1>
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

        <div className="flex h-full w-full items-center bg-dark px-5 pt-10 backdrop-blur-lg lg:bg-dark">
          <div className="w-full">
            <h1 className="flex items-center justify-center text-2xl font-semibold text-white">
              <div className="rounded-full bg-gray-600 p-3 flex justify-center items-center">
                <AiFillLock size={30} />
              </div>
            </h1>
            {isTokenInvalid ? (
              <div className="text-center">
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
            ) : (
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                name="basic"
              >
                <Form.Item
                  label={
                    <h1 className="text-lg font-semibold text-white">
                      Password
                    </h1>
                  }
                  name="password"
                  dependencies={["confirmPassword"]}
                  hasFeedback
                  className="mt-10 w-full"
                  rules={[
                    { required: true, message: "Please input your password!" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (
                          !value ||
                          getFieldValue("confirmPassword") === value
                        ) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
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
                    <h1 className="text-lg font-semibold text-white">
                      Confirm Password
                    </h1>
                  }
                  dependencies={["password"]}
                  hasFeedback
                  name="confirmPassword"
                  className="mt-10 w-full"
                  rules={[
                    { required: true, message: "Please input your password!" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
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
            )}
          </div>
        </div>
      </div>
    );
  }
}
