import { Menu, Tag } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContextProvider";
import { LOGOUT } from "../../context/constants/AuthConstants";
import { AiOutlineUser } from "react-icons/ai";

const { SubMenu } = Menu;

const SideBar = ({ menulist, admin }) => {
  const { authDispatch, auth, sideBar } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`${
        !sideBar.isOpen ? "w-0 md:w-14" : "w-60"
      } normal-transition h-screen border-r dark:border-gray-700`}
    >
      <Menu
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={[location.pathname.split("/")[1]]}
        mode="inline"
        inlineCollapsed={!sideBar.isOpen}
        className="h-full w-auto relative"
      >
        {menulist.map((menu) => {
          if (menu.hasSubMenu) {
            return (
              <SubMenu
                key={menu.id}
                icon={menu.icon}
                title={<p className="text-sm">{menu.name}</p>}
              >
                {menu.subMenu.map((subMenu) => {
                  if (subMenu.hasSubMenu) {
                    return (
                      <SubMenu
                        className="dark:text-white"
                        key={subMenu.id}
                        title={<p className="text-sm">{subMenu.name}</p>}
                      >
                        {subMenu.subMenu.map((subSubMenu) => {
                          if (subSubMenu.hasSubMenu) {
                            return (
                              <SubMenu
                                className="dark:text-white"
                                key={subSubMenu.id}
                                title={
                                  <p className="text-sm">{subSubMenu.name}</p>
                                }
                              >
                                {subSubMenu.subMenu.map((subSubSubMenu) => (
                                  <Menu.Item
                                    key={subSubSubMenu.id}
                                    className="text-sm"
                                    onClick={() => navigate(subSubSubMenu.link)}
                                  >
                                    {subSubSubMenu.name}
                                  </Menu.Item>
                                ))}
                              </SubMenu>
                            );
                          } else {
                            return (
                              <Menu.Item
                                key={subSubMenu.id}
                                className="text-sm"
                                onClick={() => navigate(subSubMenu.link)}
                              >
                                {subSubMenu.name}
                              </Menu.Item>
                            );
                          }
                        })}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <Menu.Item
                        key={subMenu.id}
                        onClick={() => navigate(subMenu.link)}
                        className="text-sm"
                      >
                        {subMenu.name}
                      </Menu.Item>
                    );
                  }
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item
                key={menu.id}
                icon={menu.icon}
                className="border-r border-transparent"
              >
                <Link to={menu.link}>
                  <span className="text-sm dark:text-white">{menu.name}</span>
                </Link>
              </Menu.Item>
            );
          }
        })}
        <SubMenu
          className={`absolute ${
            !sideBar.isOpen ? "bottom-[70px]" : "bottom-[55px]"
          } w-full ${!sideBar.isOpen ? "py-0" : "pt-2 pb-4"}`}
          icon={<AiOutlineUser size={20} />}
          key={admin.id}
          title={
            <div className="dark:text-white">
              <div className="text-sm truncate leading-3 mt-2 font-semibold">
                {admin.name}
              </div>
              <Tag color="purple">{auth && auth?.user?.role}</Tag>
            </div>
          }
        >
          {admin.hasSubMenu &&
            admin.subMenu.map((subMenu) => {
              if (subMenu.link === "") {
                return (
                  <Menu.Item
                    key={subMenu.id}
                    onClick={() =>
                      authDispatch({ type: LOGOUT }, navigate("/login"))
                    }
                    className={`text-sm ${
                      !sideBar.isOpen ? "pl-auto" : "pl-14"
                    } dark:text-white`}
                  >
                    <span className="dark:text-white">{subMenu.name}</span>
                  </Menu.Item>
                );
              } else if (
                subMenu.superAdmin &&
                auth &&
                auth?.user?.role !== "superadmin"
              ) {
                return null;
              } else {
                return (
                  <Menu.Item
                    key={subMenu.id}
                    className={`text-sm ${
                      !sideBar.isOpen ? "pl-auto" : "pl-14"
                    } dark:text-white`}
                  >
                    <Link to={subMenu.link} className="dark:text-white">
                      {subMenu.name}
                    </Link>
                  </Menu.Item>
                );
              }
            })}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SideBar;
