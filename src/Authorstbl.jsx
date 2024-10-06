import React from "react";
import "./Authorstbl.css";

function Authorstbl({ authors }) {
  return (
    <>
      <div className="container-atbl">
        <h2>AUTHORS (HANNAH REA AURE DUPLON)</h2>

        {/* table cont start here */}
        <div class="table-cont">
          <table class="table custom table-hover">
            {/* table head start here */}
            <thead className="table-dark">
              <tr>
                <th scope="col">AUTHOR ID</th>
                <th scope="col">FIRST NAME</th>
                <th scope="col">LAST NAME</th>
                <th scope="col">EDIT</th>
              </tr>
            </thead>
            {/* table head end here */}

            {/* table body start here */}
            <tbody className="tbody">
              {authors.map((author, key) => (
                <tr key={key}>
                  <td>{author.author_id}</td>
                  <td>{author.first_name}</td>
                  <td>{author.last_name}</td>
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

export default Authorstbl;
