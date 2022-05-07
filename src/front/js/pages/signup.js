import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../../styles/signup.css";
import { useForm } from "react-hook-form";

import "../../styles/signup.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    actions.signUp(data);
  };
  const newSign = () => {
    return alert("Thank your signing up to NannyHub");
  };
  return (
    <>
      <div className="header" id="header">
        <h1>NannyHub</h1>
        <p>Things are better with Mary</p>
      </div>
      <div className="d-flex justify-content-center">
        <Row className="d-flex">
          <Col className="col-4" id="hand">
            <img src="https://images.pexels.com/photos/6393346/pexels-photo-6393346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </Col>
          <Col className="col-4" id="sign">
            <div id="pg">
              <p>
                Are you a parent looking for your very own Mary Poppins? If
                you'd like to use our services please fill this form to sign up
                and start looking for a nanny
              </p>
            </div>
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
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                id="input3"
              />
              <input
                type="password"
                placeholder="Password"
                {...register("Password", { required: true, maxLength: 40 })}
                id="input4"
              />
              <button
                type="submit"
                className="btn btn-default"
                id="bb"
                onClick={newSign}
              >
                Sign Up
              </button>
            </form>
          </Col>
          <Col className="col-4">
            <img src="https://images.pexels.com/photos/6393180/pexels-photo-6393180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </Col>
        </Row>
      </div>
      <br></br>
    </>
  );
};
export default Signup;
