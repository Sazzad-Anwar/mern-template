import React from "react";
import useSWR from "swr";
import Fetcher from "../../utils/Fetcher";
import { Button, Tooltip } from "antd";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import Error from "../../components/Error/Index";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import RoleCart from "../../components/RoleCard/Index";
import { useNavigate } from "react-router-dom";

function RoleManagement() {
  const { auth, sideBar } = useGlobalContext();
  const { data: roleArray } = useSWR("/roles", Fetcher);
  const navigate = useNavigate();

  const roles = roleArray && roleArray.data;

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/role-management",
      name: "Role Management",
    },
  ];

  if (auth && !auth.user.role === "superAdmin") {
    <Error error="Your are not allowed to access this page" />;
  } else {
    return (
      <>
        <BreadCrumbs details={breadcrumbs} />

        <div className="my-5">
          <Tooltip title="Create Role">
            <Button
              onClick={() => navigate("/create-role")}
              type="ghost"
              shape="default"
              className="mr-1 flex py-5 items-center shadow-md dark:bg-deepDark dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400"
            >
              <span className="">Create Role</span>
            </Button>
          </Tooltip>

          <div
            className={
              sideBar.isOpen
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
                : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3"
            }
          >
            {roles &&
              roles
                .filter((role) => role.role !== "superAdmin")
                .map((role) => <RoleCart key={role._id} role={role} />)}
          </div>
        </div>
      </>
    );
  }
}

export default RoleManagement;
