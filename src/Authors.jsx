import React from "react";
import "./Authors.css";
import Authorstbl from "./Authorstbl";
import EditAuthorstbl from "./EditAuthorstbl";

function Authors() {
  return (
    <>
      <div class="container-a">
        <Authorstbl></Authorstbl>
        <EditAuthorstbl></EditAuthorstbl>
      </div>
    </>
  );
}

export default Authors;
