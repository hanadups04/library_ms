import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Books from "./Books";
import Authors from "./Authors";
import Publishers from "./Publishers";
import Members from "./Members";
import BorrowedBooks from "./BorrowedBooks";
import "./App.css";

function App() {
  return (
    <>
      <div class="body bg-custom vh-100">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
            <div className="container-fluid">
              <a class="navbar-brand" href="#">
                ADMIN
              </a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <Link to="/" class="nav-link active">
                      BOOKS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/authors" class="nav-link active">
                      AUTHORS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/publishers" class="nav-link active">
                      PUBLISHERS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/members" class="nav-link active">
                      MEMBERS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/borrowedbooks" class="nav-link active">
                      BOOKS BORROWED
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/publishers" element={<Publishers />} />
            <Route path="/members" element={<Members />} />
            <Route path="/borrowedBooks" element={<BorrowedBooks />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
