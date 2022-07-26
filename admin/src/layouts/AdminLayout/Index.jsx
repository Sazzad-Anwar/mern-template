import { lazy, Suspense, useEffect, useState } from "react";
import { Affix, Avatar } from "antd";
import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import Loader from "../../components/Loader/Index";
import {
  APP_NAME,
  MENU_LIST,
  UNAUTHORIZED_ROUTES,
} from "../../assets/app.config";
import CheckTokenValidation from "../../utils/CheckTokenValidation";
import { CLOSE_SIDE_BAR } from "../../context/constants/SideBar";
import useSWR from "swr";
import Fetcher from "../../utils/Fetcher";
const SideBar = lazy(() => import("../../components/Sidebar/Index"));
const Header = lazy(() => import("../../components/Header/Index"));

export default function AdminLayout({ children, breadcrumbs }) {
  const { auth, sideBar, sideBarToggleDispatch } = useGlobalContext();
  const { data } = useSWR("/app-config", Fetcher);
  const [app, setApp] = useState({});
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    function handleResize() {
      if (window.innerWidth <= 1024 && sideBar.isOpen) {
        sideBarToggleDispatch({ type: CLOSE_SIDE_BAR, payload: false });
      }
    }

    if (window.innerWidth <= 1024 && sideBar.isOpen) {
      sideBarToggleDispatch({ type: CLOSE_SIDE_BAR, payload: false });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideBarToggleDispatch]);

  useEffect(() => {
    if (data && data.data) {
      setApp(data.data[0]);
    }
  }, [data]);

  const adminRoute = {
    name: auth?.user?.name,
    link: "",
    id: auth?.user?._id,
    image: auth?.user?.avatar,
    email: auth?.user?.email,
    hasSubMenu: true,
    subMenu: [
      {
        name: "Logout",
        link: "",
        id: "/logout",
      },
      {
        name: "Role Management",
        link: "/role-management",
        id: "/role-management",
        superAdmin: true,
      },
      {
        name: "Settings",
        link: "/settings",
        id: "/settings",
        superAdmin: true,
      },
    ],
  };

  if (UNAUTHORIZED_ROUTES.includes(location.pathname) && !auth.user) {
    return children;
  }

  if (!auth.user) {
    return <Navigate to="login" />;
  }

  return (
    <div className="flex w-full items-start bg-gray-100 dark:bg-dark">
      <Affix>
        <div>
          <div
            className={
              sideBar.isOpen
                ? "items-center flex justify-start py-2 px-5 bg-white border-b border-r dark:border-gray-800 dark:bg-deepDark"
                : "hidden md:flex items-center justify-center py-2 bg-white border-b border-r dark:border-gray-800 dark:bg-deepDark"
            }
          >
            <Avatar
              alt={app?.name}
              src={app?.logo ?? "/logo.jpg"}
              className={
                sideBar.isOpen
                  ? "normal-transition rounded-full dark:text-gray-900"
                  : "normal-transition dark:text-gray-900"
              }
              size={45}
            >
              {app?.name?.split("")[0].toUpperCase()}
            </Avatar>
            {sideBar.isOpen && (
              <p className="dark:text-white text-lg ml-3 truncate">
                {app?.name ?? APP_NAME}
              </p>
            )}
          </div>
          <Suspense fallback={<Loader />}>
            <SideBar
              collapsed={sideBar.isOpen}
              menulist={MENU_LIST}
              admin={adminRoute}
            />
          </Suspense>
        </div>
      </Affix>
      <div className="normal-transition min-h-screen w-full">
        <Header breadcrumbs={breadcrumbs} />
        <main className="normal-transition ml-auto overflow-auto px-5">
          <CheckTokenValidation />
          {children}
        </main>
      </div>
    </div>
  );
}
