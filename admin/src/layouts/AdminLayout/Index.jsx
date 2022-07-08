import { lazy, Suspense, useEffect, useState } from "react";
import { Affix } from "antd";
import { RiDashboardLine } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { AiFillCode } from "react-icons/ai";
import { MdCategory } from 'react-icons/md';
import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import Loader from "../../components/Loader/Index";
import { APP_NAME } from "../../app.config";
import CheckTokenValidation from "../../utils/CheckTokenValidation";
import { CLOSE_SIDE_BAR, OPEN_SIDE_BAR } from "../../context/constants/SideBar";
const SideBar = lazy(() => import("../../components/Sidebar/Index"));
const Header = lazy(() => import("../../components/Header/Index"));

export default function AdminLayout({ children, breadcrumbs }) {
  const { auth, sideBar, sideBarToggleDispatch } = useGlobalContext();
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

  const menuList = [
    {
      name: "Home",
      link: "/",
      id: "/",
      icon: <RiDashboardLine size={20} />,
      hasSubMenu: false,
    },
    {
      name: "Users",
      id: "users",
      hasSubMenu: true,
      icon: <ImUsers size={20} />,
      subMenu: [
        {
          name: "List",
          link: "/users",
          id: "/users",
          hasSubMenu: false,
        },
      ],
    },
    {
      name: "API Docs",
      link: "/api",
      hasSubMenu: false,
      id: "/api",
      icon: <AiFillCode size={20} />,
    },
    {
      name: "Category",
      link: "/category",
      id: "/category",
      icon: <MdCategory size={20} />,
      hasSubMenu: false,
    },
  ];

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
      },
    ],
  };

  const toggleSideBar = () => {
    if (sideBar.isOpen) {
      sideBarToggleDispatch({ type: CLOSE_SIDE_BAR });
    } else {
      sideBarToggleDispatch({ type: OPEN_SIDE_BAR });
    }
  }

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="flex w-full items-start bg-gray-100 dark:bg-gray-800">
      <Affix>
        <div>
          <div className="flex items-center justify-center py-4 bg-white border-b border-r dark:border-gray-800 dark:bg-gray-900">
            <img
              src="/logo192.png"
              className={
                sideBar.isOpen
                  ? "normal-transition rounded-full h-8 w-8"
                  : "normal-transition h-auto w-8"
              }
              alt="logo"
            />
            {sideBar.isOpen && (
              <p className="dark:text-white text-xl ml-3">{APP_NAME}</p>
            )}
          </div>
          <Suspense fallback={<Loader />}>
            <SideBar
              collapsed={sideBar.isOpen}
              menulist={menuList}
              admin={adminRoute}
            />
          </Suspense>
        </div>
      </Affix>
      <div className="normal-transition h-screen w-full">
        <Header
          setShowSidebar={toggleSideBar}
          showSidebar={sideBar.isOpen}
          breadcrumbs={breadcrumbs}
        />
        <main className="normal-transition ml-auto overflow-auto px-5">
          <CheckTokenValidation />
          {children}
        </main>
      </div>
    </div>
  );
}
