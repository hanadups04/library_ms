import React from "react";
import "./EditBorrowedBooks.css";
import Template from "./EditPropTemplate.jsx";
import { useState } from "react";
import axios from "axios";

function EditBorrowedBooks() {
  const [selectedOption, setSelectedOption] = useState("3");

  const [input, setInput] = useState({
    book_id: "",
    member_id: "",
    return_date: "",
    status: "3",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setInput((values) => ({ ...values, status: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    axios
      .post(
        "http://localhost/library_ms_db/api/insertBooksBorrowed.php",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      });
  };
  return (
    <>
      <div class="container-2">
        <h2>EDIT BOOKS BORROWED</h2>
        <form onSubmit={handleSubmit}>
          <Template
            desc="BOOK ID"
            type="text"
            name="book_id"
            value={input.book_id}
            onChange={handleChange}
          />
          <Template
            desc="MEMBER ID"
            type="text"
            name="member_id"
            value={input.member_id}
            onChange={handleChange}
          />
          <Template
            desc="RETURN DATE"
            type="date"
            name="return_date"
            value={input.return_date}
            onChange={handleChange}
          />
          <select
            className="form-select mt-4"
            aria-label="Default select example"
            name="status"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="3">Borrow Status</option>
            <option value="Borrowed">Borrowed</option>
            <option value="Returned">Returned</option>
          </select>

          <div class="btn-container d-flex justify-content-center">
            <button type="submit" class="btn btn-custom">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditBorrowedBooks;
