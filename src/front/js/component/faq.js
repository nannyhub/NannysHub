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
    <h1 className="text-center">How it works</h1>
    <CardGroup>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://harver.com/wp-content/uploads/2019/05/Ideal-Candidate-Profile@2x.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center">1. Find a nanny</Card.Title>
          <Card.Text className="text-center">
            Find a nanny among the list of the best nannies available in your
            city using the different filter.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://harver.com/wp-content/uploads/2020/08/Matching-Technology-In-Recruitment@2x.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center">
            2. Check nanny's profile
          </Card.Title>
          <Card.Text className="text-center">
            Access to nannies' profile to validate the experience, skills,
            availability..
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.gradsiren.com/career-advice/gswpcadir-content/uploads/2018/11/Video-Interview.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center">3. Contact the nanny</Card.Title>
          <Card.Text className="text-center">
            Contact the ones that fit with your needs and schedule a talk to
            know more about "your nanny".
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <h1 className="text-center">FAQs</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Can I meet the nanny before she/he takes care of my son?
        </Accordion.Header>
        <Accordion.Body>
          For nannies who are going to have a regular schedule we feel it is
          best for you and your family to meet them as part of the interview
          process. We coordinate a meeting so you and the nanny can ensure you
          are compatible. Occasional or one-time childcare requests are filled
          by the same high quality, vetted, Twinkle Toes Nannies and you will be
          provided a picture, info sheet and verified references of your Twinkle
          Toes Nanny ahead of time but you likely will not meet the nanny
          beforehand.
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
      <Card border="light" className="contact-button-card">
        <Card.Body>
          <Card.Title className="text-center">
            Do you Still have questions?
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-vector/worker-with-doubts_1012-193.jpg"
            />
          </Card.Title>
          <Card.Text className="text-center">We've got the answers</Card.Text>
        </Card.Body>
        <Button variant="primary">
          <Link id="button-contact-faq" to="/contacts">
            Get in touch with Us!
          </Link>
        </Button>
      </Card>
    </div>
  </>
);
