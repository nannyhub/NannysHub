import React, { useContext } from "react";
import "../../styles/contacts.css";

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
        <form id="contactForm">
          <div className="mb-3">
            <label className="form-label" for="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder=" Your email address"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label" for="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Type your message"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary btn-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacts;
