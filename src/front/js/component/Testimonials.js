import React from "react";
import user1 from "../../img/paty.jpg";
import user2 from "../../img/nan.jpg";
import "../../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <section className="content-container">
        <div className="textArea">
          <h2 id="tes">Testimonials</h2>
          <p>Check what others parents have to say about our nannies</p>
        </div>
        <div className="cust-container">
          <img src={user1} alt="Avatar" style={{ width: "90px" }} id="avi" />
          <p>
            <span id="par">Joana Doe (Content Writer)</span>
          </p>
          <p id="ds">
            Great professionals! There's nothing I could complain about these
            nannies.
          </p>
        </div>

        <div className="cust-container">
          <img src={user2} alt="Avatar" style={{ width: "90px" }} id="avi" />
          <p>
            <span id="par">Rebecca Foster (Reporter)</span>
          </p>
          <p id="ds">
            Here, I finally found someone I could trust with my child.
          </p>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
