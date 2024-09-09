import React from "react";
import "./EditPublisherstbl.css";
import Template from "./EditPropTemplate.jsx";
import { useState } from "react";
import axios from "axios";

function EditPublisherstbl() {
  const [input, setInput] = useState({
    publisher_name: "",
    address: "",
    contact_number: "",
    email: "",
    website: "",
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
      .post("http://localhost/library_ms_db/api/insertPublishers.php", input, {
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
      <div class="container-ep">
        <h2>EDIT PUBLISHERS TABLE</h2>

        <form onSubmit={handleSubmit}>
          {/* Input groups start here */}
          <Template
            desc="PUBLISHER NAME"
            name="publisher_name"
            value={input.publisher_name}
            onChange={handleChange}
          />
          <Template
            desc="ADDRESS"
            name="address"
            value={input.address}
            onChange={handleChange}
          />
          <Template
            desc="CONTACT NUMBER"
            name="contact_number"
            value={input.contact_number}
            onChange={handleChange}
          />
          <Template
            desc="EMAIL"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <Template
            desc="WEBSITE"
            name="website"
            value={input.website}
            onChange={handleChange}
          />
          {/* Input groups end here */}

          {/* Buttons start here */}
          <div class="btn-container d-flex justify-content-center">
            <button type="submit" class="btn btn-custom">
              Submit
            </button>
          </div>
          {/* Buttons end here */}
        </form>
      </div>
      {/* table cont end here */}
    </>
  );
}

export default EditPublisherstbl;
