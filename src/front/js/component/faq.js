import React, { Component } from "react";
import {
  useAccordionButton,
  Accordion,
  Card,
  CardGroup,
} from "react-bootstrap";

// const decoratedOnClick = useAccordionButton(eventKey, onClick);

export const FAQ = () => (
  <>
    <h1 className="text-center">How it works</h1>
    <CardGroup>
      <Card style={{ width: "18rem" }}>
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
      <Card style={{ width: "18rem" }}>
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
      <Card style={{ width: "18rem" }}>
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
        <Accordion.Header>FAQ #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>FAQ #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>FAQ #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>FAQ #4</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>
);
