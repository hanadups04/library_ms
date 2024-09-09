import React from "react";
import "./MainBorrowedBooks.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MainBorrowedBooks() {
  const [booksBorrow, setBooksBorrow] = useState([]);
  useEffect(() => {
    getBooksBorrow();
  }, []);

  function getBooksBorrow() {
    axios
      .get("http://localhost/library_ms_db/api/readBooksBorrowed.php")
      .then(function (response) {
        console.log(response.data);
        setBooksBorrow(response.data.data);
      });
  }

  return (
    <>
      <div className="container-bbtbl">
        <h2>BOOKS BORROWED (HANNAH REA AURE DUPLON)</h2>

        {/* table cont start here */}
        <div class="table-cont">
          {/* table head start here */}
          <table class="table custom table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">BORROW ID</th>
                <th scope="col">BOOK ID</th>
                <th scope="col">MEMBER ID</th>
                <th scope="col">BORROWED DATE</th>
                <th scope="col">DUE DATE</th>
                <th scope="col">RETURN DATE</th>
                <th scope="col">STATUS</th>
                <th scope="col">EDIT</th>
              </tr>
            </thead>
            {/* table head end here */}

            {/* table body start here */}
            <tbody className="tbody">
              {booksBorrow.map((bookBorrow, key) => (
                <tr key={key}>
                  <th>{bookBorrow.borrow_id}</th>
                  <td>{bookBorrow.book_id}</td>
                  <td>{bookBorrow.member_id} </td>
                  <td>{bookBorrow.borrow_date} </td>
                  <td>{bookBorrow.due_date}</td>
                  <td>{bookBorrow.return_date}</td>
                  <td>{bookBorrow.status} </td>
                  <td>
                    <button type="submit" class="btn btn-custom">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* table body end here */}
          </table>
        </div>
        {/* table cont end here */}
      </div>
    </>
  );
}

export default MainBorrowedBooks;
