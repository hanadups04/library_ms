import React from "react";
import "./Members.css";
import Memberstbl from "./Memberstbl";
import EditMemberstbl from "./EditMemberstbl";

function Members() {
  return (
    <>
      <div class="container-lm">
        <Memberstbl></Memberstbl>
        <EditMemberstbl></EditMemberstbl>
      </div>
    </>
  );
}

export default Members;
