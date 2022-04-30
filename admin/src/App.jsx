import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Api from "./pages/Api";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

export default function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgot-Password" element={<ForgotPassword />} />
      <Route path="api" element={<Api />} />
      <Route path="/users" element={<Users />} />
      <Route index path="/users/:id" element={<UserDetails />} />
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
