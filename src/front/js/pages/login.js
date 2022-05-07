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

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/search");
  return (
    <>
      <div className="header" id="header">
        <h1>NannyHub</h1>
        <p>Things are better with Mary</p>
      </div>
      <div className="d-flex justify-content-center">
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
            <form action="/action_page.php" id="ff" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  onChange={changeHandlerPassword}
                />
              </div>
              <button type="submit" className="btn btn-default" id="ll">
                Log in
              </button>
            </form>
          </Col>
          <Col className="col-4">
            <img src="https://images.pexels.com/photos/3662841/pexels-photo-3662841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </Col>
        </Row>
      </div>
      <br></br>
    </>
  );
};

export default Login;
