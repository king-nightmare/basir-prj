import { Fragment } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Classes from "../../routes/mainPage.module.css";

const Admin = () => {
  return (
    <Fragment>
      <Outlet></Outlet>
      <div className={Classes.navigatorAjustment}>
        <div className={Classes.adminNavigator}>
          <Link to="/FPGA">FPGA</Link>
        </div>
        <div className={Classes.adminNavigator}>
          <Link to="/Reconstruction">Reconstruction</Link>
        </div>
      </div>
    </Fragment>
  );
};
export default Admin;
