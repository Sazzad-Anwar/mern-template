import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Error from "../../components/Error/Index";
import Fetcher from "../../utils/Fetcher";
import { Button, Empty, Tooltip } from "antd";
import CategoryCard from "../../components/CategoryCard/Index";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Index() {
  const [categories, setCategories] = useState([]);
  const { sideBar } = useGlobalContext();
  const navigate = useNavigate();

  const { data, error: categoryError } = useSWR("/categories", Fetcher);

  useEffect(() => {
    setCategories(data && data.data);
  }, [data]);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/category",
      name: "Category",
    },
  ];

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      {categoryError ? (
        <Error
          error={
            categoryError.response.data.message
              ? categoryError.response.data.message
              : categoryError.message
          }
        />
      ) : (
        <div className="pt-3">
          <Tooltip title="Add Category">
            <Button
              onClick={() => navigate("/create-category")}
              type="ghost"
              shape="default"
              className="mr-1 flex py-5 items-center shadow-md dark:bg-deepDark dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
            >
              <span className="">Create Category</span>
            </Button>
          </Tooltip>

          {categories && !categories.length && <Empty />}
          <div
            className={
              sideBar.isOpen
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
                : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3"
            }
          >
            {categories?.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
