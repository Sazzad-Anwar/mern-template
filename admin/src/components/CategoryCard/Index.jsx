import { Avatar, Button, Popconfirm, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
import axiosInstance from "../../utils/AxiosInstance";
import CapitalLetterWord from "../../utils/CapitalLetterWord";
import Fetcher from "../../utils/Fetcher";
import Modal from "../Modal/Index";

export default function Index({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { data } = useSWR("/categories", Fetcher);

  useEffect(() => {
    setCategories(data && data.data);
  }, [data]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const deleteCategory = async (id) => {
    try {
      await axiosInstance.delete(`/categories/${id}`);
      toast.success("Category deleted successfully");
      setCategories(categories.filter((category) => category.id !== id));
      mutate(`/categories`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="my-3 shadow-md hover:shadow-lg normal-transition pl-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-between">
        <button onClick={toggleModal} className="flex items-center">
          <Avatar
            alt={category.name}
            src={category.image}
            className="dark:text-gray-900 mr-2"
            size={35}
          >
            {category.name.split("")[0].toUpperCase()}
          </Avatar>
          <div className="overflow-hidden">
            <p className="font-medium dark:text-white text-base truncate">
              {CapitalLetterWord(category.name)}
            </p>
          </div>
        </button>

        <div>
          <Tooltip title="Edit category">
            <Button
              onClick={() => navigate(`/category/${category._id}`)}
              type="ghost"
              shape="default"
              className="mr-1 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
              icon={
                <div className="flex justify-center items-center">
                  <FiEdit3 />
                </div>
              }
            />
          </Tooltip>
          <Tooltip title="Delete category">
            <Popconfirm
              title="Are you sure to delete this category?"
              onConfirm={() => deleteCategory(category._id)}
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
      {/* Add category modal */}
      <Modal
        showModal={isOpen}
        toggleModal={toggleModal}
        title="Category Details"
      >
        <h2 className="dark:text-white text-lg">
          Category:{" "}
          <span className="font-mono font-semibold ml-2">
            {CapitalLetterWord(category.name)}
          </span>
        </h2>
        <h2 className="dark:text-white text-lg">
          Children:{" "}
          <span className="font-mono font-semibold ml-2">
            {category.children.length
              ? category.children.join(",")
              : "No children"}
          </span>{" "}
        </h2>
        <h2 className="dark:text-white text-lg">
          Active:{" "}
          <span className="font-mono font-semibold ml-2">
            {category.isActive ? "Yes" : "No"}
          </span>
        </h2>
      </Modal>
    </>
  );
}
