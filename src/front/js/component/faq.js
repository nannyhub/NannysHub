import React, { Component } from "react";
import {
  useAccordionButton,
  Accordion,
  Card,
  CardGroup,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/faq.css";

// const decoratedOnClick = useAccordionButton(eventKey, onClick);

export const FAQ = () => (
  <>
    <div className="banner" id="hh">
      <h1>How does it work</h1>
    </div>
    {/* <h1 className="text-center">How it works</h1> */}
    <CardGroup>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/3874548/pexels-photo-3874548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title className="text-center" id="tt">
            1. Find a nanny
          </Card.Title>
          <Card.Text className="text-center" id="cc">
            Find a nanny among the list of the best nannies available in your
            city using the filter.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/6608885/pexels-photo-6608885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title className="text-center" id="tt">
            2. Check nanny's profile
          </Card.Title>
          <Card.Text className="text-center" id="cc">
            Access the nannies' profiles to validate their experience, location,
            skills and availability.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card.Body>
          <Card.Title className="text-center" id="tt">
            3. Contact the nanny
          </Card.Title>
          <Card.Text className="text-center" id="cc">
            Contact the ones that fit with your needs and schedule a meeting to
            know more about your potential nanny.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <br></br>
    <div className="banner" id="hh">
      <h1> FAQs</h1>
    </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Can I meet the nanny before she/he takes care of my children?
        </Accordion.Header>
        <Accordion.Body>
          For nannies who are going to have a regular schedule, we feel it is
          best for you and your family to meet them as part of the interview
          process. We will arrange a meeting so that you and the nanny can
          interact to ensure compatibility. Occasional or one-time childcare
          requests are filled by the same high quality, vetted, Twinkle Toes
          Nannies and you will be provided a info sheet and verified references
          ahead of time. Although you can choose have an online meeting with the
          nanny, you likely will not meet the nanny in person beforehand.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          What happens if my regular nanny is unavailable?
        </Accordion.Header>
        <Accordion.Body>
          If your regularly scheduled nanny gets sick or is otherwise
          unexpectedly unavailable, we've got you covered! Our policy is for the
          nanny to contact us first and then immediately let you know. We will
          contact our on-call nanny, who is another Twinkle Toes nanny just as
          qualified as your regular nanny, and let her know she is needed. We
          will then touch base with you to let you know who can be there as a
          substitute. If you decide to decline the on-call nanny that is totally
          fine. You have the final say, but we strive to have a backup option
          for you. While Twinkle Toes makes every effort to find a backup nanny
          in every situation, we cannot guarantee that one will be available.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does payment work?</Accordion.Header>
        <Accordion.Body>
          Our payment process is very easy! We provide electronic invoicing sent
          directly to your email. Families who use our services less than 20
          hours a week can expect to receive a retroactive invoice every 2
          weeks. For those with schedules of more than 20 hours per week we ask
          that you pay 2 weeks in advance and you will also be invoiced every 2
          weeks. Any unused hours will simply roll over to the next billing
          cycle. You will never lose the time for which you have paid. Payment
          options will be listed on your invoice and include e-check or paper
          check.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Can I ask for references for the nanny that I am insterested to hire?
        </Accordion.Header>
        <Accordion.Body>
          Absolutely! Just ask! Contact us to know more information/references
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div>
      <br></br>
    </div>
  </>
);
