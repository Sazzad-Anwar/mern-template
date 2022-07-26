import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader/Index";
import CreateRole from "./pages/RoleManagement/CreateRole";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Fetcher from "./utils/Fetcher";
import useSWR from "swr";
const RoleDetails = lazy(() => import("./pages/RoleManagement/RoleDetails"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Registration = lazy(() => import("./pages/Auth/Registration"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const Api = lazy(() => import("./pages/Api/Index"));
const RoleManagement = lazy(() => import("./pages/RoleManagement/Index"));
const Users = lazy(() => import("./pages/Users/Index"));
const UserDetails = lazy(() => import("./pages/Users/Details"));
const Home = lazy(() => import("./pages/Home/Index"));
const NotFound = lazy(() => import("./pages/NotFound/Index"));
const ResetPassword = lazy(() => import("./pages/Auth/ResetPassword"));
const Category = lazy(() => import("./pages/Category/Index"));
const ErrorLogs = lazy(() => import("./pages/ErrorLogs/Index"));
const ErrorLogsDetails = lazy(() => import("./pages/ErrorLogs/Details"));
const CreateCategory = lazy(() => import("./pages/Category/Create"));
const CategoryDetails = lazy(() => import("./pages/Category/Details"));
const Layout = lazy(() => import("./layouts/AdminLayout/Index"));
const Folders = lazy(() => import("./pages/Folders/Index"));
const CreateFolder = lazy(() => import("./pages/Folders/Create"));
const FolderDetails = lazy(() => import("./pages/Folders/Details"));
const CreateUser = lazy(() => import("./pages/Users/Create"));
const UploadFile = lazy(() => import("./pages/Upload/Index"));
const AppSettings = lazy(() => import("./pages/AppSetting/Index"));

export default function Index() {
  const { data } = useSWR("/app-config", Fetcher);
  const { pathname } = useLocation();
  const [app, setApp] = useState({});

  useEffect(() => {
    if (data && data.data) {
      setApp(data.data[0]);
    }
  }, [data]);

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" href={app?.logo} />
        <meta name="description" content={app?.description} />
        <title>
          Medi Career {pathname === "/" ? "" : "| " + pathname.split("/")[1]}
        </title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route
              path="login"
              element={
                <Suspense fallback={<Loader />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="registration"
              element={
                <Suspense fallback={<Loader />}>
                  <Registration />
                </Suspense>
              }
            />
            <Route
              path="forgot-Password"
              element={
                <Suspense fallback={<Loader />}>
                  <ForgotPassword />
                </Suspense>
              }
            />
            <Route
              path="reset-password/:token"
              element={
                <Suspense fallback={<Loader />}>
                  <ResetPassword />
                </Suspense>
              }
            />
            <Route
              path="folders"
              element={
                <Suspense fallback={<Loader />}>
                  <Folders />
                </Suspense>
              }
            />
            <Route
              path="folders/:id/details"
              element={
                <Suspense fallback={<Loader />}>
                  <FolderDetails />
                </Suspense>
              }
            />
            <Route
              path="folders/:id/upload"
              element={
                <Suspense fallback={<Loader />}>
                  <UploadFile />
                </Suspense>
              }
            />
            <Route
              path="create-folder"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateFolder />
                </Suspense>
              }
            />
            <Route
              path="api"
              element={
                <Suspense fallback={<Loader />}>
                  <Api />
                </Suspense>
              }
            />
            <Route
              path="category"
              element={
                <Suspense fallback={<Loader />}>
                  <Category />
                </Suspense>
              }
            />
            <Route
              path="create-category"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateCategory />
                </Suspense>
              }
            />
            <Route
              path="category/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <CategoryDetails />
                </Suspense>
              }
            />
            <Route
              path="error-logs"
              element={
                <Suspense fallback={<Loader />}>
                  <ErrorLogs />
                </Suspense>
              }
            />
            <Route
              path="error-logs/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <ErrorLogsDetails />
                </Suspense>
              }
            />
            <Route
              path="role-management"
              element={
                <Suspense fallback={<Loader />}>
                  <RoleManagement />
                </Suspense>
              }
            />
            <Route
              path="create-role"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateRole />
                </Suspense>
              }
            />
            <Route
              path="role-management/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <RoleDetails />
                </Suspense>
              }
            />
            <Route
              path="/users"
              element={
                <Suspense fallback={<Loader />}>
                  <Users />
                </Suspense>
              }
            />
            <Route
              path="/create-user"
              element={
                <Suspense fallback={<Loader />}>
                  <CreateUser />
                </Suspense>
              }
            />
            <Route
              index
              path="/users/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <UserDetails />
                </Suspense>
              }
            />
            <Route
              index
              path="settings"
              element={
                <Suspense fallback={<Loader />}>
                  <AppSettings />
                </Suspense>
              }
            />
            <Route
              index
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
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
        </Layout>
      </Suspense>
    </HelmetProvider>
  );
}
