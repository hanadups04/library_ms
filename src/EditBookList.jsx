import React from "react";
import "./EditBookList.css";
import Template from "./EditPropTemplate.jsx";
import { useState } from "react";
import axios from "axios";

function EditBookList() {
  const [input, setInput] = useState({
    author_id: "",
    publisher_id: "",
    title: "",
    genre: "",
    publication_year: "",
    num_of_copies: "",
    shelf_location: "",
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
      .post("http://localhost/library_ms_db/api/insertBooks.php", input, {
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
      {/*  cont start here */}
      <div class="container-ebl">
        <h2>EDIT BOOK LIST (HANNAH DUPLON) </h2>

        <form onSubmit={handleSubmit}>
          {/* Input groups start here */}
          <Template
            desc="AUTHOR ID"
            type="text"
            name="author_id"
            value={input.author_id}
            onChange={handleChange}
          />
          <Template
            desc="PUBLISHER ID"
            type="text"
            name="publisher_id"
            value={input.publisher_id}
            onChange={handleChange}
          />
          <Template
            desc="TITLE"
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
          <Template
            desc="GENRE"
            type="text"
            name="genre"
            value={input.genre}
            onChange={handleChange}
          />
          <Template
            desc="PUBLICATION YEAR"
            type="date"
            name="publication_year"
            value={input.publication_year}
            onChange={handleChange}
          />
          <Template
            desc="NUMBER OF COPIES"
            type="text"
            name="num_of_copies"
            value={input.num_of_copies}
            onChange={handleChange}
          />
          <Template
            desc="SHELF LOCATION "
            type="text"
            name="shelf_location"
            value={input.shelf_location}
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

export default EditBookList;
