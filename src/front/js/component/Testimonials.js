import React from "react";
import "../../styles/Testimonials.css";
import Carousel from "react-bootstrap/Carousel";
const Testimonials = () => {
  return (
    <>
      <section className="content-container">
        <div className="textArea">
          <h2 id="tes">Testimonials</h2>
          <p>Check what others parents have to say about our nannies</p>
        </div>
        <div>
          <Carousel>
            <Carousel.Item id="carousel">
              <h3 className="header" id="carousel">
                "With NannyHub I was finally able to find a professional that I
                can trust my children with"
              </h3>
              <p id="opinions"> -Lilith Salvatore</p>
            </Carousel.Item>
            <Carousel.Item id="carousel">
              <h2 className="header" id="carousel">
                "This service is a MUST when you're in a pinch"
              </h2>
              <p id="opinions"> -Nancy Martin </p>
            </Carousel.Item>
            <Carousel.Item id="carousel">
              <h2 className="header" id="carousel">
                "With NannyHub I was finally able to find a professional that I
                can trust my children with"
              </h2>
              <p id="opinions"> -Malcom Welsh</p>
            </Carousel.Item>
            <Carousel.Item id="carousel">
              <h2 className="header" id="carousel">
                "I am usually very picky with peoople who are around my
                children, but now I trust every nanny"
              </h2>
              <p id="opinions"> -Robert Shells</p>
            </Carousel.Item>{" "}
            <Carousel.Item id="carousel">
              <h2 className="header" id="carousel">
                "My children love their new nanny. Thank you NannyHub"
              </h2>
              <p id="opinions"> -Fiona Harrington</p>
            </Carousel.Item>
          </Carousel>
        </div>
        <br></br>
      </section>
    </>
  );
};

export default Testimonials;
