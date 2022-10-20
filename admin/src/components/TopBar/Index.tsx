import { Affix, Tooltip } from 'antd';
import React from 'react';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri';
import { SIDE_BAR_TOGGLE } from '../../context/constants/SideBar.contatns';
import useDeviceWidth from '../../hooks/useDeviseWidth';
import { HeaderEnum } from './header.type';

const TopBar = () => {
    const { sideBar, sideBarDispatch } = useGlobalContext();
    const { isMobileWidth } = useDeviceWidth();

    return (
        <Affix>
            <div>
                <header
                    style={{
                        height: HeaderEnum.height,
                    }}
                    className={
                        isMobileWidth && sideBar.isOpen
                            ? 'hidden'
                            : 'normal-transition relative min-w-full bg-white py-2.5 shadow'
                    }
                >
                    <div className="mx-2 md:mx-5 flex h-full items-center justify-between">
                        <div className="normal-transition font-nunito purple-text flex w-auto items-center py-0 text-2xl font-extrabold">
                            <button
                                onClick={() =>
                                    sideBarDispatch({
                                        type: SIDE_BAR_TOGGLE,
                                        payload: !sideBar.isOpen,
                                    })
                                }
                                className="absolute flex justify-center items-center rounded-full top-1/2 left-3 -translate-y-1/2 scale-100 cursor-pointer p-2 active:scale-90 bg-transparent hover:bg-primary-100 group dark:bg-transparent normal-transition"
                            >
                                {sideBar.isOpen ? (
                                    <Tooltip placement="right" title={<span>Close Side Menu</span>}>
                                        <RiMenuFoldLine className="text-2xl text-black active:rotate-[360deg] group-hover:text-primary-500" />
                                    </Tooltip>
                                ) : (
                                    <Tooltip placement="right" title={<span>Open Side Menu</span>}>
                                        <RiMenuUnfoldLine className="text-2xl text-black active:rotate-[360deg] group-hover:text-primary-500" />
                                    </Tooltip>
                                )}
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </Affix>
    );
};

export default TopBar;
