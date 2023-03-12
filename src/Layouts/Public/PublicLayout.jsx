import React, { Fragment, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LazyLoading from "../../Components/SplashScreen/LazyLoading";
import { PublicRoutes } from "../../Routes/routes";
import { AppRoutes } from "./../../Routes/AppRoutes";
const PublicLayout = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoading />}>
        <Routes>
          {PublicRoutes &&
            PublicRoutes.length > 0 &&
            PublicRoutes.map((route, k) => {
              return (
                <Route
                  key={k}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          <Route
            path="*"
            element={<Navigate to={AppRoutes.Dashboard} replace />}
          />
        </Routes>
      </Suspense>
    </Fragment>
  );
};
export default PublicLayout;
