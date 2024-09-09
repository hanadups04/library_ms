import React from "react";
import "./EditAuthorstbl.css";
import Template from "./EditPropTemplate";
import { useState } from "react";
import axios from "axios";

function EditAuthorstbl() {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    axios
      .post("http://localhost/library_ms_db/api/insertAuthors.php", input, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data);
      });
  };

  return (
    <>
      {/* table cont start here */}
      <div class="container-ea">
        <h2>EDIT AUTHORS TABLE</h2>

        {/* Input groups start here */}
        <form onSubmit={handleSubmit}>
          <Template
            desc="FIRST NAME"
            type="text"
            name="first_name"
            value={input.first_name}
            onChange={handleChange}
          />
          <Template
            desc="LAST NAME"
            type="text"
            name="last_name"
            value={input.last_name}
            onChange={handleChange}
          />
          {/* Input groups end here */}

          {/* Buttons start here */}
          <div class="btn-container d-flex justify-content-center">
            <button type="submit" class="btn btn-custom">
              Submit
            </button>
          </div>
        </form>
        {/* Buttons end here */}
      </div>
      {/* table cont end here */}
    </>
  );
}

export default EditAuthorstbl;
