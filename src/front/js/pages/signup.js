import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/signup.css";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    actions.signUp(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", { required: true, maxLength: 12 })}
      />

      <input type="submit" />
    </form>
  );
  // fetch(
  //   "https://3001-nannyhub-nannyshub-e9zfwobe8zj.ws-eu38.gitpod.io/api/signup",
  //   {
  //     method: "POST",
  //     body: {
  //       first_name: "first_name",
  //       last_name: "last_name",
  //       email: "email",
  //       password: "password",
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));
  // return (
  //   <form className="d-flex flex-column align-items-center">
  //     <h3 className="mt-3">Sign Up</h3>
  //     <div className="form-group">
  //       <label>First name</label>
  //       <input type="text" className="form-control" placeholder="First name" />
  //     </div>
  //     <div className="form-group">
  //       <label>Last name</label>
  //       <input type="text" className="form-control" placeholder="Last name" />
  //     </div>
  //     <div className="form-group">
  //       <label>Email address</label>
  //       <input
  //         type="email"
  //         className="form-control"
  //         placeholder="Enter email"
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label>Password</label>
  //       <input
  //         type="password"
  //         className="form-control"
  //         placeholder="Enter password"
  //       />
  //     </div>
  //     <button type="submit" className="btn btn-primary btn-block mt-3">
  //       Sign Up
  //     </button>
  //     <p className="forgot-password text-right">
  //       Already registered <Link to="/login">sign in?</Link>
  //     </p>
  //   </form>
  // );
};
