import { Fragment, useEffect, useState } from "react";
import ErrorButton from "../cards/errorButton";

const MainPage = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://your-api-url")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => new Error(setError(error)));
  }, []);

  return (
    <Fragment>
      {data ? (
        <p>loading...</p>
      ) : (
        <ErrorButton message={error.message}></ErrorButton>
      )}
    </Fragment>
  );
};

export default MainPage;
