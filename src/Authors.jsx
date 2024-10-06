import React from "react";
import "./Authors.css";
import Authorstbl from "./Authorstbl";
import EditAuthorstbl from "./EditAuthorstbl";
import { useEffect, useState } from "react";
import axios from "axios";
import WebSocketComponent from "./WebSocketComponent";

function Authors() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthors();
  }, []);

  const handleWebSocketMessage = (message) => {
    console.log("wsc message received in authors:", message);
    const newAuthor = JSON.parse(message); // Assuming the message is a JSON string
    console.log("Parsed new author:", newAuthor);
    setAuthors((prevAuthors) => {
      const updatedAuthors = [...prevAuthors, newAuthor];
      console.log("Updated authors state:", updatedAuthors);
      return updatedAuthors;
    });
  };

  const getAuthors = () => {
    axios
      .get("http://localhost/library_ms_db/api/readAuthors.php")
      .then(function (response) {
        console.log(response.data);
        setAuthors(response.data.data);
      });
  };

  return (
    <>
      <div class="container-a">
        <Authorstbl authors={authors} />
        <EditAuthorstbl />
        <WebSocketComponent onmessage={handleWebSocketMessage} />
      </div>
    </>
  );
}

export default Authors;
