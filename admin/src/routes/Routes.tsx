import { Suspense, lazy, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Index';
import { RouteEnums } from './routes.types';
import capitalLetterWord from '../utils/capitalLetterWord';
import { Config } from '../shared/Config';
import { useServiceWorker } from '../hooks/useServiceWorker';
import { toast } from 'react-toastify';
const AdminLayout = lazy(() => import('../layouts/Admin/Index'));
const RoleDetails = lazy(() => import('../pages/Roles/Details/Index'));
const CreateRole = lazy(() => import('../pages/Roles/Create/Index'));
const Utilities = lazy(() => import('../pages/Utilities/Index'));
const Roles = lazy(() => import('../pages/Roles/Index'));
const CreatePost = lazy(() => import('../pages/Posts/CreatePost/Index'));
const Posts = lazy(() => import('../pages/Posts/Index'));
const NotFound = lazy(() => import('../components/NotFound/Index'));
const ProtectedRoute = lazy(() => import('../layouts/Protected/Index'));
const Login = lazy(() => import('../pages/Auth/Login/Index'));
const Dashboard = lazy(() => import('../pages/Dashboard/Index'));

function App() {
    const { pathname } = useLocation();
    const { reloadPage, showReload, waitingWorker } = useServiceWorker();

    useEffect(() => {
        if (showReload && waitingWorker) {
            toast.info('Update available! Click here to update', {
                onClick: () => reloadPage(),
                autoClose: false,
            });
        }
    }, [waitingWorker, showReload, reloadPage]);

    console.log(
        pathname
            .split('/')
            .filter((title: string) => title !== '')
            .map((title: string) => capitalLetterWord(title))
            .join(' | '),
    );

    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    {Config.BrandName.toUpperCase()}
                    {pathname === '/'
                        ? ''
                        : ' | ' +
                          pathname
                              .split('/')
                              .filter((title: string) => title !== '')
                              .map((title: string) => capitalLetterWord(title))
                              .join(' | ')}
                </title>
            </Helmet>
            <AdminLayout>
                <Routes>
                    <Route
                        path={RouteEnums.Login}
                        element={
                            <Suspense fallback={<Loader />}>
                                <Login />
                            </Suspense>
                        }
                    />
                    <Route
                        path={RouteEnums.GetAllPosts}
                        element={
                            <Suspense fallback={<Loader />}>
                                <ProtectedRoute component={Posts} />
                            </Suspense>
                        }
                    />
                    <Route
                        path={RouteEnums.CreatePost}
                        element={
                            <Suspense fallback={<Loader />}>
                                <ProtectedRoute component={CreatePost} />
                            </Suspense>
                        }
                    />
                    <Route
                        index
                        path={RouteEnums.Dashboard}
                        element={
                            <Suspense fallback={<Loader />}>
                                <ProtectedRoute component={Dashboard} />
                            </Suspense>
                        }
                    />
                    <Route
                        index
                        path={RouteEnums.AdminUtilities}
                        element={
                            <Suspense fallback={<Loader />}>
                                <ProtectedRoute component={Utilities} />
                            </Suspense>
                        }
                    />
                    <Route
                        index
                        path={RouteEnums.Roles}
                        element={
                            <Suspense fallback={<Loader />}>
                                <ProtectedRoute component={Roles} />
                            </Suspense>
                        }
                    />
                    <Route
                        index
                        path={RouteEnums.CreateRoles}
                        element={
                            <Suspense fallback={<Loader />}>
                                <ProtectedRoute component={CreateRole} />
                            </Suspense>
                        }
                    />
                    <Route
                        index
                        path={RouteEnums.AccessRoutesOfRole}
                        element={
                            <Suspense fallback={<Loader />}>
                                <ProtectedRoute component={RoleDetails} />
                            </Suspense>
                        }
                    />
                    <Route
                        index
                        path={RouteEnums.NotFound}
                        element={
                            <Suspense fallback={<Loader />}>
                                <NotFound />
                            </Suspense>
                        }
                    />
                    <Route path="*" element={<Navigate to={RouteEnums.NotFound} />} />
                </Routes>
            </AdminLayout>
        </HelmetProvider>
    );
}

export default App;
