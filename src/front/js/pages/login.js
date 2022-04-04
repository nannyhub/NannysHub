
import React, { Component, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/login.css";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const changeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  console.log("This is your token", store.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
    console.log("test Click");
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/search");

  return (
    <>
      <div className="header" id="header">
        <h1>NannyHub</h1>
        <p>Things are better with Mary</p>
      </div>
      <Row className="d-flex">
        <Col className="col-4" id="hand">
          <img src="https://images.pexels.com/photos/3661450/pexels-photo-3661450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </Col>
        <Col className="col-4" id="sign">
          <div>
            <img
              src="https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png"
              id="av"
            ></img>
          </div>
          <form action="/action_page.php" id="ff">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <button type="submit" class="btn btn-default" id="ll">
              Log in
            </button>
          </form>
        </Col>
        <Col className="col-4">
          <img src="https://images.pexels.com/photos/3662841/pexels-photo-3662841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </Col>
      </Row>
      <br></br>
    </>
  );
};

export default Login;
