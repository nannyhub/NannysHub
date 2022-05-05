import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const BookNannyModal = (props) => {
  const sendBooking = () => {
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book {props.name}!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="mb-3">
          <label for="form-date" class="form-label">
            Date:
          </label>
          <input
            type="date"
            class="form-control"
            id="form-date"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="form-address" class="form-label">
            Address:
          </label>
          <input
            type="text"
            class="form-control"
            id="form-address"
            placeholder="Sesame Street, 45"
          />
        </div>
        <div class="mb-3">
          <label for="form-number-of-children" class="form-label">
            Number of Children
          </label>
          <input
            type="number"
            class="form-control"
            id="form-number-of-children"
            min={0}
          />
        </div>
        <div class="mb-3">
          <label for="form-additional-comments" class="form-label">
            Additional comments:
          </label>
          <textarea
            class="form-control"
            id="form-additional-comments"
            rows="3"
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="success" onClick={() => sendBooking()}>
          Send!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookNannyModal;
