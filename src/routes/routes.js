import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "routes/ProtectedRoutes";
import { authRoutes, protectedRoutes } from "routes/constant";

import NotFound404 from "pages/NotFound/NotFound";

const Router = () => {
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route
          key={route.title}
          path={route.path}
          element={route.component}
          title={route.title}
        />
      ))}

      <Route element={<ProtectedRoutes />}>
        {protectedRoutes.map((route) => (
          <Route
            key={route.title}
            path={route.path}
            element={route.component}
            title={route.title}
          />
        ))}
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default Router;
