import React from "react";
import "./Books.css";
import BookList from "./BookList";
import EditBookList from "./EditBookList";

function Books() {
  return (
    <>
      <div class="container-b">
        <BookList></BookList>
        <EditBookList></EditBookList>
      </div>
    </>
  );
}

export default Books;
