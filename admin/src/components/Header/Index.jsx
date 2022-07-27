import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import DarkModeToggler from "../DarkModeToggler/Index";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { CLOSE_SIDE_BAR, OPEN_SIDE_BAR } from "../../context/constants/SideBar";
import { Tooltip } from "antd";
import AppData from "../../../package.json";

const Header = () => {
  const { sideBar, sideBarToggleDispatch } = useGlobalContext();

  const toggleSideBar = () => {
    if (sideBar.isOpen) {
      sideBarToggleDispatch({ type: CLOSE_SIDE_BAR });
    } else {
      sideBarToggleDispatch({ type: OPEN_SIDE_BAR });
    }
  };

  return (
    <header className="normal-transition sticky top-0 z-20 h-16 min-w-full bg-white py-2.5 dark:bg-deepDark">
      <div className="mx-2 md:mx-5 flex h-full items-center justify-between">
        <div className="normal-transition font-nunito purple-text flex w-auto items-center py-0 text-2xl font-extrabold">
          <button
            onClick={toggleSideBar}
            className="absolute flex justify-center items-center rounded-full top-1/2 left-3 -translate-y-1/2 scale-100 cursor-pointer p-2 active:scale-90 bg-transparent hover:bg-gray-200 dark:bg-transparent hover:dark:bg-black normal-transition"
          >
            {sideBar.isOpen ? (
              <Tooltip
                placement="bottomLeft"
                title={<span>Close Side Menu</span>}
              >
                <RiMenuUnfoldLine className="normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white" />
              </Tooltip>
            ) : (
              <Tooltip
                placement="bottomLeft"
                title={<span>Open Side Menu</span>}
              >
                <RiMenuFoldLine className="normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white" />
              </Tooltip>
            )}
          </button>
        </div>
        <div className="flex items-center">
          <Tooltip
            placement="bottomLeft"
            title={<span>App version {AppData.version}</span>}
          >
            <p className="dark:text-white mr-5 text-base font-medium font-mono">
              v{AppData.version}
            </p>
          </Tooltip>
          <DarkModeToggler className="mr-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
