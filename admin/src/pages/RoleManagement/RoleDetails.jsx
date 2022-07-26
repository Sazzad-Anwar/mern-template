import React, { useEffect, useId, useState } from "react";
import Error from "../../components/Error/Index";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import ApiCard from "../../components/ApiCard/Index";
import Fetcher from "../../utils/Fetcher";
import useSWR, { mutate } from "swr";
import axiosInstance from "../../utils/AxiosInstance";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BsPersonCircle } from "react-icons/bs";
import { Collapse } from "antd";
import CapitalLetterWord from "../../utils/CapitalLetterWord";
const { Panel } = Collapse;

export default function RoleDetails() {
  const { auth, sideBar } = useGlobalContext();
  const { id } = useParams();
  const { data } = useSWR(`/roles/${id}`, Fetcher);
  const { data: apiArray } = useSWR("/getAPI", Fetcher);
  const [accessRoles, setAccessRoles] = useState([]);

  let role = data && data.data;
  let apis = apiArray && apiArray.data;

  console.log(apis);

  useEffect(() => {
    const accessRoleHandler = () => {
      setAccessRoles(role.accessRoutes);
    };
    const timer = setTimeout(() => {
      accessRoleHandler();
    }, 100);

    return () => clearTimeout(timer);
  }, [role]);

  const addRoute = async (selectedApi, e) => {
    e.target.checked = !e.target.checked;
    if (accessRoles?.includes(selectedApi)) {
      setAccessRoles(accessRoles.filter((route) => route !== selectedApi));
      try {
        await axiosInstance.put(`/roles/${role._id}`, {
          role: role.role,
          accessRoutes: accessRoles.filter((route) => route !== selectedApi),
        });
        toast.warning("Route removed successfully!");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      setAccessRoles((accessRoles) => [...accessRoles, selectedApi]);
      try {
        await axiosInstance.put(`/roles/${role._id}`, {
          role: role.role,
          accessRoutes: [...accessRoles, selectedApi],
        });
        toast.success("Route added successfully!");
        mutate("/roles");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: true,
      link: "/role-management",
      name: "Role Management",
    },
    {
      isLink: false,
      link: "/role-management/:id",
      name: role && role.role,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  if (auth && !auth.user.role === "superAdmin") {
    <Error error="Your are not allowed to access this page" />;
  } else {
    return (
      <>
        <BreadCrumbs details={breadcrumbs} />
        <div className="mt-5">
          <div className="flex items-center">
            <BsPersonCircle size={20} className="dark:text-white" />
            <h1 className="dark:text-white font-medium text-xl ml-3">
              Access Routes of {role?.role}
            </h1>
          </div>
          <Collapse onChange={onChange} className="my-5">
            {apis?.map(({ slug, _id, name }) => (
              <Panel
                header={
                  <span className="text-base font-semibold dark:text-white">
                    {CapitalLetterWord(slug)} Routes
                  </span>
                }
                key={_id}
              >
                <div
                  className={
                    sideBar.isOpen
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 py-5"
                      : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 py-5"
                  }
                >
                  {name.map((name) => (
                    <ApiCard
                      key={useId}
                      addRoute={addRoute}
                      api={name}
                      _id={name}
                      accessRoles={accessRoles}
                    />
                  ))}
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </>
    );
  }
}
