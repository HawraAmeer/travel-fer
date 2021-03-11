import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>This page does not exist!</h2>
      <Link to="/">
        <button>Go back home!</button>
      </Link>
    </>
  );
};

export default NotFound;
