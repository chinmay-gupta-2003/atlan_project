import { Navigate } from "react-router-dom";

export const authRoutes = [
  {
    path: "/",
    component: <Navigate to="/login" />,
    title: "Redirect",
  },
  {
    path: "/login",
    component: <></>,
    title: "Login",
  },
];

export const protectedRoutes = [];
