import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            id="mary"
            src="https://cdn.dribbble.com/users/2068059/screenshots/5856152/attachments/1261679/child_care_logo_by_visual_curve_02.png?compress=1&resize=800x600&vertical=top"
            alt=""
          ></img>
        </a>
        <div className="ml-auto"></div>
        <div className="justify-content-end">
          <button type="button" className="btn" id="button1">
            <Link to="/login">Login</Link>
          </button>
          <button type="button" className="btn" id="button2">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
