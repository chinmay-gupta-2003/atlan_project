import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import ProtectedRoutes from "routes/ProtectedRoutes";
import { authRoutes, protectedRoutes } from "routes/constant";

import NotFound404 from "pages/NotFound/NotFound";
import Sidebar from "components/Sidebar/Sidebar";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {authRoutes.map((route) => (
          <Route
            key={route.title}
            path={route.path}
            element={
              <Suspense fallback={<div>Loading {route.title}...</div>}>
                {route.component}
              </Suspense>
            }
            title={route.title}
          />
        ))}

        <Route element={<ProtectedRoutes />}>
          <Route element={<Sidebar />}>
            {protectedRoutes.map((route) => (
              <Route
                key={route.title}
                path={route.path}
                element={
                  <Suspense fallback={<div>Loading {route.title}...</div>}>
                    {route.component}
                  </Suspense>
                }
                title={route.title}
              />
            ))}
          </Route>
        </Route>

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
