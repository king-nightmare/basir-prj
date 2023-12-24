import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./mainPage";
import { Fragment } from "react";

const ManageRoutes = () => {
  const routes = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

  return (
    <Fragment>
      <Outlet />
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
};
export default ManageRoutes;
