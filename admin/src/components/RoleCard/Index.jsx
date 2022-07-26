import { Button, Popconfirm, Tooltip } from "antd";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import { BsPersonCircle } from "react-icons/bs";
import axiosInstance from "../../utils/AxiosInstance";
import CapitalLetterWord from "../../utils/CapitalLetterWord";
import { useNavigate } from "react-router-dom";
import Fetcher from "../../utils/Fetcher";

export default function Index({ role }) {
  const navigate = useNavigate();
  const { data: roleCount } = useSWR(`/roles?role=${role.role}`, Fetcher);

  let count = roleCount && roleCount.data;

  const deleteRole = async (role) => {
    try {
      await axiosInstance.delete(`/roles/${role._id}`);
      toast.success("Role deleted successfully!");
      mutate("/roles");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="my-3 shadow-md hover:shadow-lg normal-transition pl-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-between">
        <button
          className="flex items-center"
          onClick={() => navigate(`/role-management/${role._id}`)}
        >
          <div className="mr-2 flex justify-center items-center rounded-full dark:bg-gray-600 bg-gray-300">
            <BsPersonCircle size={30} className="dark:text-white" />
          </div>

          <div className="overflow-hidden">
            <p className="font-medium dark:text-white text-lg truncate">
              {CapitalLetterWord(role.role)} ({count})
            </p>
          </div>
        </button>

        <div>
          <Tooltip title="Delete role">
            <Popconfirm
              title="Are you sure to delete this role?"
              onConfirm={() => deleteRole(role)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="ghost"
                shape="default"
                className="mr-2 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
                icon={
                  <div className="flex justify-center items-center">
                    <AiFillDelete />
                  </div>
                }
              />
            </Popconfirm>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
