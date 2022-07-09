import React, { lazy, Suspense, useEffect, useState } from "react";
import useSWR from "swr";
import Error from "../../components/Error/Index";
import Fetcher from "../../utils/Fetcher";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { Checkbox } from "antd";
import Loader from "../../components/Loader/Index";
const Layout = lazy(() => import("../../layouts/AdminLayout/Index"));

export default function Index() {
  const [categories, setCategories] = useState([]);

  const { data, error: CategoryLoadingError } = useSWR("/categories", Fetcher);

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

  const TreeMenu = ({ category }) => {
    if (category.ancestors.length === 0) {
      return (
        <>
          <div className="flex items-center text-white">
            <Checkbox></Checkbox>
            <button className="flex justify-center items-center">
              <p className="ml-2 text-base">{category.name}</p>
              <BiChevronRight size={15} />
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <Layout breadcrumbs={breadcrumbs}>
        {CategoryLoadingError && <Error error={CategoryLoadingError.message} />}
        {/* <div className="pt-3">
                {categories && categories.map((category) => (
                    <div key={category._id}>
                        <TreeMenu category={category} />
                    </div>
                ))}
            </div> */}
      </Layout>
    </Suspense>
  );
}
