import React from "react";
import "./BorrowedBooks.css";
import EditBorrowedBooks from "./EditBorrowedBooks";
import MainBorrowedBooks from "./MainBorrowedBooks";

function BorrowedBooks() {
  return (
    <>
      <div class="container-bb">
        <MainBorrowedBooks></MainBorrowedBooks>
        <EditBorrowedBooks></EditBorrowedBooks>
      </div>
    </>
  );
}

export default BorrowedBooks;
