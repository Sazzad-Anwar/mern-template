import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Index";
import Registration from "./pages/Registration/Index";
import ForgotPassword from "./pages/ForgotPassword/Index";
import Api from "./pages/Api/Index";
import RoleManagement from "./pages/RoleManagement/Index";
import Users from "./pages/Users/Index";
import UserDetails from "./pages/UserDetails/Index";
import Home from "./pages/Home/Index";
import NotFound from "./pages/NotFound/Index";
import ResetPassword from "./pages/ResetPassword/Index";
import Category from "./pages/Category/Index";
import ErrorLogs from "./pages/ErrorLogs/Index";
import ErrorLogsDetails from "./pages/ErrorLogsDetails/Index";

export default function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forgot-Password" element={<ForgotPassword />} />
      <Route path="api" element={<Api />} />
      <Route path="category" element={<Category />} />
      <Route path="error-logs" element={<ErrorLogs />} />
      <Route path="error-logs/:id" element={<ErrorLogsDetails />} />
      <Route path="role-management" element={<RoleManagement />} />
      <Route path="passwordReset/:token" element={<ResetPassword />} />
      <Route path="/users" element={<Users />} />
      <Route index path="/users/:id" element={<UserDetails />} />
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
