import React, { useContext } from "react";
import "../../styles/contacts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

const Contacts = () => {
  return (
    <>
      <div className="header" id="header">
        <h1>NannyHub</h1>
        <p>Things are better with Mary</p>
      </div>
      <div className="text-center" id="titulo">
        <h3> Our Mission</h3>
      </div>
      <Container className="container-fluid">
        <Row>
          <Col classname="col-5">
            <img
              src="https://images.pexels.com/photos/5691814/pexels-photo-5691814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              id="kids"
            />
          </Col>
          <Col>
            <p className="row-md col-6" id="mission">
              NannyHub was born from the vision of one of our members, as a
              parent. At the begging, as a group, we decided to follow this
              vision, considering 2 out of 3 members are parents and feel very
              strongly motivated to improve the nanny and childcare industry.
              Later on, we were joined by another member who, despite not having
              children, also shared our passion for the childcare industry, and
              dove in to help us in the completion of this project
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text justify-content-start" id="call">
        <h3> Contacts Us</h3>
      </div>
      <Container>
        <Row>
          <Col>
            <p className="col-5" id="contact">
              Hello parents! Hello nannies! We would love to hear from you. Do
              you want to know more about NannyHub? Please use our contact
              information to send us an email, or feel free to fill the form to
              get in touch.
            </p>
          </Col>
          <Col className="col-4" id="form">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="name" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Control type="subject" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage" id="message">
                <Form.Control type="message" placeholder=" Add your message" />
              </Form.Group>
              <Button type="submit" id="button">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacts;
