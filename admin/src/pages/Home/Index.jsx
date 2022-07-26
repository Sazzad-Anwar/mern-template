import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import PontDetailsCard from "../../components/PointDetailsCard/Index";
import { RiUserSearchLine } from "react-icons/ri";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { MdCategory } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import BreadCrumbs from "../../components/BreadCrumbs/Index";

export default function Home() {
  const { sideBar } = useGlobalContext();

  let breadcrumbs = [
    {
      isLink: false,
      link: "/",
      name: "Home",
    },
  ];

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="py-6">
        <div
          className={
            sideBar.isOpen
              ? "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
          }
        >
          <PontDetailsCard
            icon={<BsPeopleFill className="dark:text-white" size={20} />}
            title="20"
            subTitle="Total Users"
          />

          <PontDetailsCard
            icon={<GoPackage className="dark:text-white" size={20} />}
            title="10"
            subTitle="Total Items"
          />

          <PontDetailsCard
            icon={<TbCurrencyTaka className="dark:text-white" size={20} />}
            title="150000"
            subTitle="Total Sales"
          />

          <PontDetailsCard
            icon={<RiUserSearchLine className="dark:text-white" size={20} />}
            title="30"
            subTitle="Today's user visit"
          />
          <PontDetailsCard
            icon={<MdCategory className="dark:text-white" size={20} />}
            title="10"
            subTitle="Total categories"
          />
        </div>
      </div>
    </>
  );
}
