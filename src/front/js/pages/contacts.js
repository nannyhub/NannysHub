import React, { useContext } from "react";
import "../../styles/contacts.css";


const Contacts = () => {
    return (
        <>
        <div className="text justify-content-start">
            <h3> Our Mission</h3>
            </div>
            <div className="text justify-content-start">
                <h3> Contacts Us</h3>
            </div>
            <div className="container col-5" id="form">
                <form id="contactForm">
                <div className="mb-3">
                    <label className="form-label" for="name">Name</label>
                    <input className="form-control" id="name" type="text" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label" for="emailAddress">Email Address</label>
                    <input className="form-control" id="emailAddress" type="email" placeholder="Email Address"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" for="message">Message</label>
                    <textarea className="form-control" id="message" type="text" placeholder="Message"></textarea>
                </div>
                <div>
                    <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                </div> 
                </form>
            </div>

        </>
    )
}

export default Contacts;