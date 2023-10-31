import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav class="navbar bg-warning">
      <Link style={{ fontFamily: "Poppins" }} to="/" class="navbar-brand mx-3">
        CRUD operation
      </Link>

      <div class="nav ">
        <Link
          style={{ fontFamily: "Montserrat" }}
          to="/create-student"
          class="nav-link"
        >
          {" "}
          Create Student
        </Link>
        <Link
          style={{ fontFamily: "Montserrat" }}
          to="/student-list"
          class="nav-link"
        >
          Student List
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
