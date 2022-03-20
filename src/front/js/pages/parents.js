import React from "react";
import "../../styles/parents.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

const Parents = () => {
  return (
    <>
      <div className="container-fluid">
        <Container>
          <Row>
            <Col className="col-2">
              <img
                src="https://previews.123rf.com/images/rosinka79/rosinka791704/rosinka79170400108/77286091-tambov-f%C3%A9d%C3%A9ration-de-russie-21-septembre-2016-portrait-de-la-famille-lego-figurines-d-un-p%C3%A8re-d-une-.jpg"
                id="profile"
              ></img>
            </Col>
            <Col className="col-5">
              <input placeholder="Add your description" id="bio"></input>
            </Col>
          </Row>
        </Container>
        <div className="container fluid justify-content-center col-4" id="form">
          <Form>
            <Form.Group className="mb-3" controlId="formFirst">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="first" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLast">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="last" placeholder="Enter your last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formChild">
              <Form.Label>Number of children</Form.Label>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-example1"
                  className="mb-3 col-12"
                >
                  1
                </Dropdown.Toggle>
                <Dropdown.Menu id="dropdown">
                  <Dropdown.Item href="#/action-1" active>
                    2
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">3</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">More</Dropdown.Item>
                  <Dropdown.Divider />
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Button variant="dark" type="submit" id="button">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Parents;
