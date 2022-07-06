import { lazy, Suspense, useEffect, useState } from "react";
import { Affix } from "antd";
import { RiDashboardLine } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { AiFillCode } from "react-icons/ai";
import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import Loader from "../../components/Loader/Index";
import { APP_NAME } from "../../app.config";
import CheckTokenValidation from "../../utils/CheckTokenValidation";
const SideBar = lazy(() => import("../../components/Sidebar/Index"));
const Header = lazy(() => import("../../components/Header/Index"));

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
      icon: <RiDashboardLine size={25} />,
      hasSubMenu: false,
    },
    {
      name: "Users Configuration",
      id: "users",
      hasSubMenu: true,
      icon: <ImUsers size={25} />,
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
      icon: <AiFillCode size={25} />,
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

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="flex w-full items-start bg-gray-100 dark:bg-gray-800">
      <Affix>
        <div>
          <div className="flex items-center justify-center py-4 bg-gray-100 border-b border-r dark:border-gray-800 dark:bg-gray-900">
            <img
              src="/logo192.png"
              className={
                collapsed
                  ? "normal-transition rounded-full h-8 w-8"
                  : "normal-transition h-auto w-8"
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
        <main className="normal-transition ml-auto overflow-auto px-5">
          <CheckTokenValidation />
          {children}
        </main>
      </div>
    </div>
  );
}
