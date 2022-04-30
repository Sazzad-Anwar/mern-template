import React, { Suspense, lazy } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import Loader from "../components/Loader";
import PontDetailsCard from "../components/PontDetailsCard";
import { RiUserSearchLine } from "react-icons/ri";
const Layout = lazy(() => import("../layouts/AdminLayout"));

export default function Home() {
  let breadcrumbs = [
    {
      isLink: false,
      link: "/",
      name: "Home",
    },
  ];

  return (
    <Suspense fallback={<Loader />}>
      <Layout breadcrumbs={breadcrumbs}>
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <PontDetailsCard
              icon={<BsPeopleFill className="dark:text-white" size={30} />}
              title="20"
              subTitle="Total Users"
            />

            <PontDetailsCard
              icon={<GoPackage className="dark:text-white" size={30} />}
              title="10"
              subTitle="Course enrolled"
            />

            <PontDetailsCard
              icon={<FaBook className="dark:text-white" size={30} />}
              title="15"
              subTitle="Total courses"
            />

            <PontDetailsCard
              icon={<RiUserSearchLine className="dark:text-white" size={30} />}
              title="30"
              subTitle="Today's user visit"
            />
          </div>
        </div>
      </Layout>
    </Suspense>
  );
}
