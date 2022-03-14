import React, { useContext } from "react";
import "../../styles/contacts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contacts = () => {
  return (
    <>
      <div className="text-center">
        <h3> Our Mission</h3>
        <p className="text center col-5" id="mission">
          NannyHub was born from the vision of one of our members, as a parent.
          At the begging, as a group, we decided to follow this vision,
          considering 2 out of 3 members are parents and feel very strongly
          motivated to improve the nanny and childcare industry. Later on, we
          were joined by another memember who, despite not having children, also
          shared our passion for the childcare industry, and dove in to help us
          in the completion of this project
        </p>
      </div>
      <div className="text-center">
        <h3> Contacts Us</h3>
        <p className="col-5" id="contact">
          Hello parents! Hello nannies! We would love to hear from you. Do you
          want to know more about NannyHub? Please use our contact information
          to send us an email, or feel free to fill the form to get in touch.
        </p>
      </div>
      <div className="container-fluid col-md-4" id="form">
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
          <Button variant="primary" type="submit" id="button">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Contacts;
