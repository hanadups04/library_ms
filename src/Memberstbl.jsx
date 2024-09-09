import React from "react";
import "./Memberstbl.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Memberstbl() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMembers();
  }, []);

  function getMembers() {
    axios
      .get("http://localhost/library_ms_db/api/readMembers.php")
      .then(function (response) {
        console.log(response.data);
        setMembers(response.data.data);
      });
  }

  return (
    <>
      <div className="container-m ">
        <h2>LIBRARY MEMBERS (HANNAH REA AURE DUPLON)</h2>

        {/* table cont start here */}
        <div class="table-cont">
          <table class="table custom table-hover">
            {/* table head start here */}
            <thead className="table-dark">
              <tr>
                <th scope="col">MEMBER ID</th>
                <th scope="col">FIRST NAME</th>
                <th scope="col">LAST NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">CONTACT NUMBER</th>
                <th scope="col">DOB</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">MEMBERSHIP START</th>
                <th scope="col">MEMBERSHIP END</th>
                <th scope="col">EDIT</th>
              </tr>
            </thead>
            {/* table head end here */}

            {/* table body start here */}
            <tbody className="tbody">
              {members.map((member, key) => (
                <tr key={key}>
                  <th>{member.member_id}</th>
                  <td>{member.first_name} </td>
                  <td>{member.last_name} </td>
                  <td>{member.email} </td>
                  <td>{member.contact_number} </td>
                  <td>{member.dob} </td>
                  <td>{member.address} </td>
                  <td>{member.membership_start} </td>
                  <td>{member.membership_end} </td>
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

export default Memberstbl;
