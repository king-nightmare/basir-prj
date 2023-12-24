import { Fragment, useEffect, useState } from "react";
import ErrorButton from "../components/cards/errorNotification/errorButton";
import Header from "./header";
import Loading from "../components/cards/loading/loading";
import { Link } from "react-router-dom";
import Classes from "./mainPage.module.css";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState({ hasError: false, message: "" });
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/github")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError({ hasError: true, message: error.message });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error.hasError) {
    return (
      <ErrorButton
        error={error.hasError}
        message={error.message}
        setError={setError}
      />
    );
  }

  if (data && setError) {
    return (
      <Fragment>
        <Header />
        <div className={Classes.navigatorAjustment}>
          <div className={Classes.adminNavigator}>
            <Link to="/admin">Admin</Link>
          </div>
          <div className={Classes.adminNavigator}>
            <Link to="/scan">Scan</Link>
          </div>
        </div>
      </Fragment>
    );
  }

  // If we're not loading, if there is no error, and if we have no data, you can return null or a placeholder
  return null;
};

export default MainPage;
