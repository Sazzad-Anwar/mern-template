import { lazy, Suspense, useEffect, useState } from "react";
import { Affix } from "antd";
import { RiDashboardLine } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { AiFillCode } from "react-icons/ai";
import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContextProvider";
import Loader from "../components/Loader";
import { APP_NAME } from "../app.config";
const SideBar = lazy(() => import("../components/Sidebar"));
const Header = lazy(() => import("../components/Header"));

export default function AdminLayout({ children, breadcrumbs }) {
  const [collapsed, setCollapsed] = useState(false);
  const { auth } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    function handleResize() {
      if (window.innerWidth < 1024) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }

    if (window.innerWidth < 1024) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuList = [
    {
      name: "Home",
      link: "/",
      id: "/",
      icon: <RiDashboardLine size={20} />,
      hasSubMenu: false,
    },
    {
      name: "Users Configuration",
      id: "users",
      hasSubMenu: true,
      icon: <ImUsers size={20} />,
      subMenu: [
        {
          name: "Users",
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
  ];

  const adminRoute = {
    name: "Admin",
    link: "",
    id: "admin",
    image: "https://i.pravatar.cc/300",
    email: "admin@mail.com",
    hasSubMenu: true,
    subMenu: [
      {
        name: "Logout",
        link: "",
        id: "/logout",
      },
      {
        name: "Settings",
        link: "/settings",
        id: "/settings",
      },
    ],
  };

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="flex w-full items-start bg-gray-100 dark:bg-gray-800">
      <Affix>
        <div>
          <div className="flex items-center justify-center pb-2">
            <img
              src="/logo192.png"
              className={
                collapsed
                  ? "normal-transition rounded-full h-14 w-14 animate-spin"
                  : "normal-transition h-auto w-14 animate-spin"
              }
              alt="logo"
            />
            {!collapsed && (
              <p className="dark:text-white text-2xl ml-3">{APP_NAME}</p>
            )}
          </div>
          <Suspense fallback={<Loader />}>
            <SideBar
              collapsed={collapsed}
              menulist={menuList}
              admin={adminRoute}
            />
          </Suspense>
        </div>
      </Affix>
      <div className="normal-transition h-screen w-full">
        <Header
          setShowSidebar={setCollapsed}
          showSidebar={collapsed}
          breadcrumbs={breadcrumbs}
        />
        <main className="normal-transition ml-auto overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
