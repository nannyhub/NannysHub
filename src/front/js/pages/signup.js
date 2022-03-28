import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";

export const Signup = () => {
  fetch(
    "https://3001-nannyhub-nannyshub-e9zfwobe8zj.ws-eu38.gitpod.io/api/signup",
    {
      method: "POST",
      body: {
        first_name: "first_name",
        last_name: "last_name",
        email: "email",
        password: "password",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <form className="d-flex flex-column align-items-center">
      <h3 className="mt-3">Sign Up</h3>
      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-3">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
  );
};
