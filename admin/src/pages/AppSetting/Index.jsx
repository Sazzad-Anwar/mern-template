import { Avatar, Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import Fetcher from "../../utils/Fetcher";
import Error from "../../components/Error/Index";
import axiosInstance from "../../utils/AxiosInstance";
import { toast } from "react-toastify";
import { APP_MOTTO_1, APP_MOTTO_2, APP_NAME } from "../../assets/app.config";

const { TextArea } = Input;

export default function Index() {
  const { data, error } = useSWR("/app-config", Fetcher);
  const [app, setApp] = useState({});

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setApp(data && data.data[0]);
    }, 500);

    return () => clearTimeout(timer);
  }, [data]);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/settings",
      name: "Settings",
    },
  ];

  const saveConfig = async (values) => {
    try {
      await axiosInstance.put(`/app-config/${app._id}`, values);
      toast.success("Config updated successfully!");
      mutate("/app-config", values);
    } catch (error) {
      toast.error(
        error.response?.data.message
          ? error.response?.data.message
          : error.message
      );
    }
  };

  const createConfig = async (values) => {
    try {
      await axiosInstance.post(`/app-config`, values);
      toast.success("Config created successfully!");
      mutate("/app-config", values);
    } catch (error) {
      toast.error(
        error.response?.data.message
          ? error.response?.data.message
          : error.message
      );
    }
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      {error ? (
        <Error
          error={
            error.response?.data.message
              ? error.response.data.message
              : error.message
          }
        />
      ) : (
        <div className="my-5">
          <div className="w-96 mx-auto">
            <div className="text-center mb-5">
              {app && Object.keys(app)?.length > 0 ? (
                <div>
                  <Avatar
                    alt={app?.name}
                    src={app?.logo}
                    className="dark:text-gray-900"
                    size={50}
                  >
                    {app?.name?.split("")[0].toUpperCase()}
                  </Avatar>
                  <Form
                    name="user-details"
                    layout="vertical"
                    initialValues={{
                      ...app,
                    }}
                    className="ml-5 grid grid-cols-1 gap-2"
                    onFinish={saveConfig}
                  >
                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">
                          App Name
                        </span>
                      }
                      name="name"
                      rules={[
                        { required: true, message: "Please input app name!" },
                      ]}
                    >
                      <Input allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">Logo</span>
                      }
                      name="logo"
                      rules={[
                        { required: true, message: "Please input logo url!" },
                      ]}
                    >
                      <Input allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">
                          Image{" "}
                          <span className="text-xs">
                            (Login, Forget Password, Reset Password Page)
                          </span>{" "}
                        </span>
                      }
                      name="image"
                    >
                      <Input allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">Motto</span>
                      }
                      name="motto"
                    >
                      <TextArea allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">
                          Description
                        </span>
                      }
                      name="description"
                    >
                      <TextArea allowClear size="large" />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        htmlType="submit"
                        size="large"
                        className="w-full"
                        type="primary"
                      >
                        Save
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              ) : (
                <>
                  <Avatar
                    alt={APP_NAME}
                    src="/logo.jpg"
                    className="dark:text-gray-900"
                    size={50}
                  >
                    {APP_NAME.split("")[0].toUpperCase()}
                  </Avatar>
                  <Form
                    name="user-details"
                    layout="vertical"
                    className="ml-5 grid grid-cols-1 gap-2"
                    onFinish={createConfig}
                    initialValues={{
                      name: APP_NAME,
                      logo: window.location.origin + "/logo.jpg",
                      motto: APP_MOTTO_1 + ". " + APP_MOTTO_2,
                      description: APP_MOTTO_1 + ". " + APP_MOTTO_2,
                      image: "/login-image.png",
                    }}
                  >
                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">
                          App Name
                        </span>
                      }
                      name="name"
                      rules={[
                        { required: true, message: "Please input app name!" },
                      ]}
                    >
                      <Input allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">Logo</span>
                      }
                      name="logo"
                      rules={[
                        { required: true, message: "Please input logo url!" },
                      ]}
                    >
                      <Input allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">
                          Image{" "}
                          <span className="text-xs">
                            (Login, Forget Password, Reset Password Page)
                          </span>{" "}
                        </span>
                      }
                      name="image"
                    >
                      <Input allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">Motto</span>
                      }
                      name="motto"
                    >
                      <TextArea allowClear size="large" />
                    </Form.Item>

                    <Form.Item
                      label={
                        <span className="text-lg dark:text-white">
                          Description
                        </span>
                      }
                      name="description"
                    >
                      <TextArea allowClear size="large" />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        htmlType="submit"
                        size="large"
                        className="w-full"
                        type="primary"
                      >
                        Save
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
