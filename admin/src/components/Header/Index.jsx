import { FiChevronsRight } from "react-icons/fi";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DarkModeToggler from "../DarkModeToggler/Index";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { CLOSE_SIDE_BAR, OPEN_SIDE_BAR } from "../../context/constants/SideBar";
import { Tooltip } from "antd";

const Header = ({ breadcrumbs }) => {

  const { sideBar, sideBarToggleDispatch } = useGlobalContext();

  const toggleSideBar = () => {
    if (sideBar.isOpen) {
      sideBarToggleDispatch({ type: CLOSE_SIDE_BAR });
    } else {
      sideBarToggleDispatch({ type: OPEN_SIDE_BAR });
    }
  };

  return (
    <header className="normal-transition sticky top-0 z-20 h-16 min-w-full border-b border-b-gray-300 bg-white py-2.5 dark:border-b-gray-900 dark:bg-gray-900">
      <div className="mx-5 flex h-full items-center justify-between">
        <div className="normal-transition font-nunito purple-text flex w-auto items-center py-0 text-2xl font-extrabold">
          <button
            onClick={toggleSideBar}
            className="absolute flex justify-center items-center rounded-full top-1/2 left-3 -translate-y-1/2 scale-100 cursor-pointer p-2 active:scale-90 bg-transparent hover:bg-gray-300 dark:bg-transparent hover:dark:bg-black normal-transition"
          >
            {sideBar.isOpen ? (
              <Tooltip placement="bottomLeft" title={<span>Close Side Menu</span>}>
                <RiMenuUnfoldLine className="normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white" />
              </Tooltip>
            ) : (
              <Tooltip placement="bottomLeft" title={<span>Open Side Menu</span>}>
                <RiMenuFoldLine className="normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white" />
              </Tooltip>
            )}
          </button>
        </div>
        <div className="mr-auto ml-10">
          <div className="flex items-center dark:text-white">
            {breadcrumbs.map((crumb, index) => {
              if (crumb.isLink && index !== breadcrumbs.length) {
                return (
                  <div key={nanoid()} className="flex items-center">
                    <Link to={crumb.link}>
                      <p className="text-base">{crumb.name}</p>
                    </Link>
                    <span className="mx-1 mt-1.5">
                      {" "}
                      <FiChevronsRight />{" "}
                    </span>
                  </div>
                );
              }
              return (
                <p key={nanoid()} className="text-base">
                  {crumb.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex items-center">
          <DarkModeToggler className="mr-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
