import { Affix, Avatar } from 'antd';
import { FC } from 'react';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri';
import { SIDE_BAR_TOGGLE } from '../../context/constants/SideBar.contatns';
import useDeviceWidth from '../../hooks/useDeviseWidth';
import MenuItems from '../../components/MenuItems/Index';
import { Config } from '../../shared/Config';

const SideBar: FC = () => {
    const { sideBar, sideBarDispatch } = useGlobalContext();
    const { isMobileWidth } = useDeviceWidth();
    let brandingSectionBarClass =
        ' items-center w-full flex  h-14 py-2.5  mx-auto bg-white border-b border-r ';

    return (
        <Affix>
            <div>
                <div>
                    <div
                        className={
                            sideBar.isOpen && !isMobileWidth
                                ? 'justify-between w-full' + brandingSectionBarClass
                                : !sideBar.isOpen && isMobileWidth
                                ? 'hidden'
                                : sideBar.isOpen && isMobileWidth
                                ? 'justify-between w-full' + brandingSectionBarClass
                                : 'w-16' + brandingSectionBarClass
                        }
                    >
                        <div className="flex h-full justify-start items-center px-3">
                            {sideBar.isOpen ? (
                                <img
                                    className="h-10 w-auto ml-3"
                                    src={Config.Logo}
                                    alt={Config.Logo}
                                />
                            ) : (
                                <Avatar alt={Config.BrandName} src={Config.LogoIcon} size={35}>
                                    {Config.BrandName.split('')[0].toUpperCase()}
                                </Avatar>
                            )}
                        </div>
                        {sideBar.isOpen && (
                            <button
                                onClick={() =>
                                    sideBarDispatch({
                                        type: SIDE_BAR_TOGGLE,
                                        payload: !sideBar.isOpen,
                                    })
                                }
                                className="justify-self-end md:hidden flex justify-center items-center rounded-full scale-100 cursor-pointer p-2 mr-2 active:scale-90 bg-transparent hover:bg-gray-200 normal-transition"
                            >
                                {sideBar.isOpen ? (
                                    <RiMenuUnfoldLine className="normal-transition text-2xl text-black active:rotate-[360deg]" />
                                ) : (
                                    <RiMenuFoldLine className="normal-transition text-2xl text-black active:rotate-[360deg]" />
                                )}
                            </button>
                        )}
                    </div>
                </div>
                <MenuItems />
            </div>
        </Affix>
    );
};

export default SideBar;
