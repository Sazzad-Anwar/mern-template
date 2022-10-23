import { lazy, ReactNode, Suspense, useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { SideBarEnum } from '../../components/SideBar/type.sidebar';
import useDeviceWidth from '../../hooks/useDeviseWidth';
import { HeaderEnum } from '../../components/TopBar/header.type';
import Loader from '../../components/Loader/Index';
import { UnAuthRoutes } from '../../shared/Config';
import { useLocation } from 'react-router-dom';
const TopBar = lazy(() => import('../../components/TopBar/Index'));
const SideBar = lazy(() => import('../../components/SideBar/Index'));

type ChildrenPropType = {
    children: ReactNode;
};

const AdminLayout = ({ children }: ChildrenPropType) => {
    const { sideBar } = useGlobalContext();
    const { isMobileWidth } = useDeviceWidth();
    let routeLocation = useLocation();
    useEffect(() => {}, []);

    if (UnAuthRoutes.includes(routeLocation.pathname)) {
        return <>{children}</>;
    }

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
