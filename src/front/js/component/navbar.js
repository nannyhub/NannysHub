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
            src="https://behindthecurtaincincy.files.wordpress.com/2015/07/voi_mary-poppins-logo.jpg"
            alt=""
          ></img>
        </a>
        <Link to="/">
          <span className="navbar-brand mb-0 h1" id="title">
            NannyHub
          </span>
        </Link>
        <div className="ml-auto"></div>
        <div className="justify-content-end">
          <button type="button" className="btn" id="button1">
            <Link to="/login">Login</Link>
          </button>
          <button type="button" className="btn btn-light" id="button2">
            <Link to="/signup">Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
