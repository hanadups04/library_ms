import React from "react";
import "./Publishers.css";
import Publisherstbl from "./Publisherstbl";
import EditPublisherstbl from "./EditPublisherstbl";

function Publishers() {
  return (
    <>
      <div class="container-p">
        <Publisherstbl></Publisherstbl>
        <EditPublisherstbl></EditPublisherstbl>
      </div>
    </>
  );
}

export default Publishers;
