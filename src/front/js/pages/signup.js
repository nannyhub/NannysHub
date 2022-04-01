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
    <form onSubmit={handleSubmit(onSubmit)} id="box">
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
        id="input1"
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
        id="input2"
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        id="input3"
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", { required: true, maxLength: 12 })}
        id="input3"
      />

      <input type="submit" id="buton" />
    </form>
  );
};
