import { Menu } from "antd";
import { VscAccount } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContextProvider";
import { LOGOUT } from "../context/constants/AuthConstants";

const { SubMenu } = Menu;

const SideBar = ({ collapsed, menulist, admin }) => {
  const { authDispatch, auth } = useGlobalContext();
  const navigate = useNavigate("/");
  const location = useLocation();

  return (
    <div
      className={`${collapsed ? "w-auto" : "w-72"
        } normal-transition h-screen shadow-2xl`}
    >
      <Menu
        defaultSelectedKeys={["/" + location.pathname.split("/")[1]]}
        defaultOpenKeys={[location.pathname.split("/")[1]]}
        mode="inline"
        inlineCollapsed={collapsed}
        className="h-full relative border-r"
      >
        {menulist.map((menu) => {
          if (menu.hasSubMenu) {
            return (
              <SubMenu
                key={menu.id}
                icon={menu.icon}
                title={<p className="text-base">{menu.name}</p>}
              >
                {menu.subMenu.map((subMenu) => {
                  if (subMenu.hasSubMenu) {
                    return (
                      <SubMenu
                        className="dark:text-white"
                        key={subMenu.id}
                        title={<p className="text-base">{subMenu.name}</p>}
                      >
                        {subMenu.subMenu.map((subSubMenu) => {
                          if (subSubMenu.hasSubMenu) {
                            return (
                              <SubMenu
                                className="dark:text-white"
                                key={subSubMenu.id}
                                title={
                                  <p className="text-base">{subSubMenu.name}</p>
                                }
                              >
                                {subSubMenu.subMenu.map((subSubSubMenu) => (
                                  <Menu.Item
                                    key={subSubSubMenu.id}
                                    className="text-base"
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
                                className="text-base"
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
                        className="text-base"
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
                  <span className="text-lg dark:text-white">{menu.name}</span>
                </Link>
              </Menu.Item>
            );
          }
        })}
        <SubMenu
          className={`absolute bottom-[55px] w-full ${collapsed ? "py-0" : "pt-2 pb-4"
            }`}
          icon={<VscAccount size={28} className="mb-2 p-0" />}
          key={admin.id}
          title={
            <div className="flex flex-col dark:text-white pb-2">
              <span className="text-sm truncate">{admin.name}</span>
              <span className="text-xs text-blue-500 font-bold">{auth.user.role.toUpperCase()}</span>
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
                    className={`text-base ${collapsed ? "pl-auto" : "pl-16"
                      } dark:text-white`}
                  >
                    <span className="dark:text-white">{subMenu.name}</span>
                  </Menu.Item>
                );
              }
              else if (subMenu.superAdmin && !auth.user.role === ("superAdmin")) {
                return null;
              }
              else {
                return (
                  <Menu.Item
                    key={subMenu.id}
                    className={`text-base ${collapsed ? "pl-auto" : "pl-16"
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
