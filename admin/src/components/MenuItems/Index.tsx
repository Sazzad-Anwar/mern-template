import React, { FC } from 'react';
import { MenuProps, Tag } from 'antd';
import { Menu } from 'antd';
import { AiOutlineDashboard, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import useDeviceWidth from '../../hooks/useDeviseWidth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../context/constants/Auth.constants';
import { RouteEnums } from '../../routes/routes.types';
import { SIDE_BAR_TOGGLE } from '../../context/constants/SideBar.contatns';
import capitalLetterWord from '../../utils/capitalLetterWord';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const MenuItems: FC = () => {
    const { sideBar, auth, authDispatch, sideBarDispatch } = useGlobalContext();
    const { isMobileWidth } = useDeviceWidth();
    const navigate = useNavigate();
    const location = useLocation();

    const onClick: MenuProps['onClick'] = (e) => {
        switch (e.keyPath[0]) {
            case 'logout':
                logOutHandle();
                return;
            case 'dashboard':
                navigate('/');
                return;
            default:
                return;
        }
    };

    const logOutHandle = () => {
        authDispatch({
            type: LOGOUT,
            payload: null,
        });
        sideBarDispatch({
            type: SIDE_BAR_TOGGLE,
            payload: false,
        });
    };

    const toggleSideBar = () => {
        if (isMobileWidth) {
            sideBarDispatch({ type: SIDE_BAR_TOGGLE, payload: !sideBar.isOpen });
        }
    };

    const items: MenuProps['items'] = [
        getItem(
            <Link to="/" onClick={toggleSideBar}>
                Dashboard
            </Link>,
            RouteEnums.Dashboard,
            <AiOutlineDashboard size={20} />,
        ),

        getItem(
            'Categories',
            RouteEnums.GetAllPosts.split('/')[1],
            <AiOutlineAppstoreAdd size={20} />,
            [
                getItem(
                    <Link to="/posts" onClick={toggleSideBar}>
                        Posts
                    </Link>,
                    RouteEnums.GetAllPosts,
                ),
            ],
        ),

        getItem(
            <div>
                <span className="mr-2 h-[5px] text-base">
                    {auth.user?.name
                        ? auth.user.name.split('').length > 10
                            ? capitalLetterWord(auth.user?.name).slice(0, 10) + '...'
                            : capitalLetterWord(auth.user?.name).slice(0, 10)
                        : ''}
                </span>
                <Tag color="purple" className="text-[10px] capitalize">
                    {auth.user?.role}
                </Tag>
            </div>,
            'sub4',
            <FaUserCircle size={20} />,
            [
                getItem('Logout', 'logout'),
                getItem(
                    <Link to="/utilities" onClick={toggleSideBar}>
                        Utilities
                    </Link>,
                    RouteEnums.AdminUtilities,
                ),
            ],
        ),
    ];

    console.log(location.pathname.split('/')[1]);

    return (
        <div
            className={`${
                !sideBar.isOpen ? 'w-0 md:w-16' : 'w-screen md:w-64'
            } normal-transition h-screen `}
        >
            <Menu
                defaultSelectedKeys={['/']}
                defaultOpenKeys={['/' + location.pathname.split('/')[1]]}
                mode="inline"
                theme="light"
                selectedKeys={['/' + location.pathname.split('/')[1]]}
                className="w-full h-screen"
                inlineCollapsed={!sideBar.isOpen}
                items={items}
                onClick={onClick}
            />
        </div>
    );
};

export default MenuItems;
