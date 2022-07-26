import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const DarkModeToggler = ({ hideButton }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  if (hideButton) return null;

  return (
    <button
      onClick={() => {
        if (theme === "dark") {
          localStorage.setItem("theme", "light");
          setTheme("light");
        } else {
          localStorage.setItem("theme", "dark");
          setTheme("dark");
        }
      }}
      className="cursor-pointer text-gray-600 transition-all ease-in-out hover:text-black dark:text-gray-500 dark:hover:text-white"
    >
      {theme === "dark" ? (
        <Tooltip
          placement="bottomRight"
          title={<span>Toggle to light mode</span>}
        >
          <FiSun className="bi bi-brightness-high-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white" />
        </Tooltip>
      ) : (
        <Tooltip
          placement="bottomRight"
          title={<span>Toggle to dark mode</span>}
        >
          <FaMoon className="bi bi-moon-stars-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white" />
        </Tooltip>
      )}
    </button>
  );
};

export default DarkModeToggler;
