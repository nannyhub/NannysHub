import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "../../styles/Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="bg-image">
        <div className="banner" id="nn">
          <h1>NannyHub</h1>
          <p>Things are better with Mary</p>
        </div>
        <div className="bg-container">
          <Button variant="light" onClick={handleShow} id="book">
            Book Now!
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Free Sign Up at NannysHub</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you looking for a qualified Babysitter?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                <Link to="/signup">Sign Up Now</Link>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </header>
    </>
  );
};

export default Header;
