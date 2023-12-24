import { Fragment, useEffect, useState } from "react";
import ErrorButton from "../cards/errorNotification/errorButton";
import Header from "./header";
import Loading from "../cards/loading/loading";

const MainPage = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplacehoder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => new Error(setError(error)));
  }, []);

  return (
    <Fragment>
      <Header />
      {data ? (
        <Loading />
      ) : (
        <ErrorButton message={error.message} error={true}></ErrorButton>
      )}
    </Fragment>
  );
};

export default MainPage;
