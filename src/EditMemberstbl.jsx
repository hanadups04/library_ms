import React from "react";
import "./EditMemberstbl.css";
import Template from "./EditPropTemplate.jsx";
import { useState } from "react";
import axios from "axios";

function EditMemberstbl() {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    dob: "",
    address: "",
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
      .post("http://localhost/library_ms_db/api/insertMembers.php", input, {
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
      <div class="container-elm">
        <h2>EDIT MEMBERS TABLE</h2>
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
          <Template
            desc="EMAIL"
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <Template
            desc="CONTACT NUMBER"
            name="contact_number"
            value={input.contact_number}
            onChange={handleChange}
          />
          <Template
            desc="DATE OF BIRTH"
            type="date"
            name="dob"
            value={input.dob}
            onChange={handleChange}
          />
          <Template
            desc="ADDRESS"
            type="text"
            name="address"
            value={input.address}
            onChange={handleChange}
          />
          <div class="btn-container d-flex justify-content-center">
            <button type="Submit" class="btn btn-custom">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditMemberstbl;
