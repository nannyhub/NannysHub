import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light" id="nav">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">NannyHub</span>
        </Link>
        <div className="ml-auto"></div>
        <div className="justify-content-end">
          <button type="button" className="btn btn-link">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
