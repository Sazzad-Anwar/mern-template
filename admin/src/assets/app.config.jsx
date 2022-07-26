import { RiDashboardLine } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { AiFillCode } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";
import { MdOutlineError } from "react-icons/md";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api/v1"
    : "https://mern-stack-template.herokuapp.com/api/v1";
export const APP_NAME = "Admin Panel";
export const APP_MOTTO_1 = "Take your app access without any hassle";
export const APP_MOTTO_2 = "Get a fast & smooth user experience.";
export const UNAUTHORIZED_ROUTES = [
  "/login",
  "/registration",
  "/forgot-password",
  "/reset-password",
];

export const MENU_LIST = [
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
    name: "Category",
    link: "/category",
    id: "/category",
    icon: <MdCategory size={20} />,
    hasSubMenu: false,
  },
  {
    name: "Folders",
    link: "/folders",
    id: "/folders",
    icon: <IoCloudUpload size={20} />,
    hasSubMenu: false,
  },
  {
    name: "API Docs",
    link: "/api",
    hasSubMenu: false,
    id: "/api",
    icon: <AiFillCode size={20} />,
  },
  {
    name: "Error Logs",
    link: "/error-logs",
    hasSubMenu: false,
    id: "/error-logs",
    icon: <MdOutlineError size={20} />,
  },
];
