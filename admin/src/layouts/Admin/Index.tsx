import { lazy, ReactNode, Suspense, useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContextProvider';
const TopBar = lazy(() => import('../../components/TopBar/Index'));
const SideBar = lazy(() => import('../../components/SideBar/Index'));
import { SideBarEnum } from '../../components/SideBar/type.sidebar';
import useDeviceWidth from '../../hooks/useDeviseWidth';
import { HeaderEnum } from '../../components/TopBar/header.type';
import Loader from '../../components/Loader/Index';

type ChildrenPropType = {
    children: ReactNode;
};

const AdminLayout = ({ children }: ChildrenPropType) => {
    const { sideBar, auth } = useGlobalContext();
    const { isMobileWidth } = useDeviceWidth();

    useEffect(() => {}, []);
    return (
        <Suspense fallback={<Loader />}>
            <div className="flex w-full bg-gray-100">
                <SideBar />
                <div
                    className="w-full main-body overflow-hidden"
                    style={{
                        maxWidth:
                            sideBar.isOpen && !isMobileWidth
                                ? `calc(100% - ${SideBarEnum.desktopWidth}px)`
                                : !sideBar.isOpen && !isMobileWidth
                                ? `calc(100% - ${SideBarEnum.mobileWidth}px)`
                                : '100%',
                    }}
                >
                    <TopBar />
                    <main
                        className="normal-transition ml-auto px-5 mt-5"
                        style={{
                            minHeight: `calc(100vh - ${HeaderEnum.height}px)`,
                        }}
                    >
                        {children}
                    </main>
                </div>
            </div>
        </Suspense>
    );
};

export default AdminLayout;
