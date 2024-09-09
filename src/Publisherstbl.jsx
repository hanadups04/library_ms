import React from "react";
import "./Publisherstbl.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Publisherstbl() {
  const [publishers, setPublishers] = useState([]);
  useEffect(() => {
    getPublishers();
  }, []);

  function getPublishers() {
    axios
      .get("http://localhost/library_ms_db/api/readPublishers.php")
      .then(function (response) {
        console.log(response.data);
        setPublishers(response.data.data);
      });
  }

  return (
    <>
      <div className="container-ptbl">
        <h2>PUBLISHERS (HANNAH REA AURE DUPLON)</h2>

        {/* table cont start here */}
        <div class="table-cont">
          {/* table head start here */}
          <table class="table custom table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">PUBLISHER ID</th>
                <th scope="col">PUBLISHER NAME</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">CONTACT NUMBER</th>
                <th scope="col">EMAIL</th>
                <th scope="col">WEBSITE</th>
                <th scope="col">EDIT</th>
              </tr>
            </thead>
            {/* table head end here */}

            {/* table body start here */}
            <tbody className="tbody">
              {publishers.map((publisher, key) => (
                <tr key={key}>
                  <td>{publisher.publisher_id}</td>
                  <td>{publisher.publisher_name}</td>
                  <td>{publisher.address}</td>
                  <td>{publisher.contact_number}</td>
                  <td>{publisher.email}</td>
                  <td>{publisher.website}</td>
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
        {/* table cont start here */}
      </div>
    </>
  );
}

export default Publisherstbl;
