import { Navigate } from "react-router-dom";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";

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
    component: <Home />,
    title: "Home",
  },
];
