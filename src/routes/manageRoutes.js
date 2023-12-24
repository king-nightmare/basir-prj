import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./mainPage";
import { Fragment } from "react";
import Admin from "../components/Admin/admin";
import Scan from "../components/Scan/scan";
import FPGA from "../components/Admin/FPGA/FPGA";
import Reconstruction from "../components/Admin/Reconstruction/Reconstruction";

const ManageRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    { path: "/Scan", element: <Scan /> },
    { path: "/FPGA", element: <FPGA /> },
    { path: "/Reconstruction", element: <Reconstruction /> },
  ]);

  return (
    <Fragment>
      <Outlet />
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
};
export default ManageRoutes;
