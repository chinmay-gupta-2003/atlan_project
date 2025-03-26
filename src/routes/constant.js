import Login from "pages/Login/Login";
import { Navigate } from "react-router-dom";

export const authRoutes = [
  {
    path: "/",
    component: <Navigate to="/login" />,
    title: "Redirect",
  },
  {
    path: "/login",
    component: <Login />,
    title: "Login",
  },
];

export const protectedRoutes = [
  {
    path: "/home",
    component: <>home</>,
    title: "Home",
  },
];
