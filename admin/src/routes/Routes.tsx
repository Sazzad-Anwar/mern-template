import { Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Index';
const AdminLayout = lazy(() => import('../layouts/Admin/Index'));
import { RouteEnums } from './routes.types';
import capitalLetterWord from '../utils/capitalLetterWord';
import { Config } from '../shared/Config';
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
                            <AdminLayout>
                                <ProtectedRoute component={Posts} />
                            </AdminLayout>
                        </Suspense>
                    }
                />
                <Route
                    path={RouteEnums.CreatePost}
                    element={
                        <Suspense fallback={<Loader />}>
                            <AdminLayout>
                                <ProtectedRoute component={CreatePost} />
                            </AdminLayout>
                        </Suspense>
                    }
                />
                <Route
                    index
                    path={RouteEnums.Dashboard}
                    element={
                        <Suspense fallback={<Loader />}>
                            <AdminLayout>
                                <ProtectedRoute component={Dashboard} />
                            </AdminLayout>
                        </Suspense>
                    }
                />
                <Route
                    index
                    path={RouteEnums.AdminUtilities}
                    element={
                        <Suspense fallback={<Loader />}>
                            <AdminLayout>
                                <ProtectedRoute component={Utilities} />
                            </AdminLayout>
                        </Suspense>
                    }
                />
                <Route
                    index
                    path={RouteEnums.Roles}
                    element={
                        <Suspense fallback={<Loader />}>
                            <AdminLayout>
                                <ProtectedRoute component={Roles} />
                            </AdminLayout>
                        </Suspense>
                    }
                />
                <Route
                    index
                    path={RouteEnums.CreateRoles}
                    element={
                        <Suspense fallback={<Loader />}>
                            <AdminLayout>
                                <ProtectedRoute component={CreateRole} />
                            </AdminLayout>
                        </Suspense>
                    }
                />
                <Route
                    index
                    path={RouteEnums.AccessRoutesOfRole}
                    element={
                        <Suspense fallback={<Loader />}>
                            <AdminLayout>
                                <ProtectedRoute component={RoleDetails} />
                            </AdminLayout>
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<Loader />}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Routes>
        </HelmetProvider>
    );
}

export default App;
