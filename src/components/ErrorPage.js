import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <>
      <div>ErrorPage encountered</div>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </>
  );
};

export default ErrorPage;
