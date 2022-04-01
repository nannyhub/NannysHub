import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
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
    <div>
      <div className="header" id="header">
        <h1>NannyHub</h1>
        <p>Things are better with Mary</p>
      </div>
      <Row className="d-flex">
        <Col className="col-4" id="hand">
          <img src="https://images.pexels.com/photos/6393346/pexels-photo-6393346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </Col>
        <Col className="col-4">
          <img src="https://images.pexels.com/photos/6393180/pexels-photo-6393180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </Col>
        <Col className="col-4" id="register">
          <div id="pg">
            <p>
              Are you a parent looking for your very own Mary Poppins? If you'd
              like to use our services please fill this form to sign up and
              start looking for a nanny
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
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              id="input3"
            />
            <input
              type="password"
              placeholder="Password"
              {...register("Password", { required: true, maxLength: 12 })}
              id="input4"
            />

            <input type="submit" placeholder="Submit" id="bb" />
          </form>
        </Col>
      </Row>
      <div className="banner">
        <br></br>
      </div>
    </div>
  );
};
