import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({ message, ams = [] }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="danger" onClick={handleShow} className="mt-5">
        {message}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Amenities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="display-6">We hope you enjoy!</div>
          {ams.map((a) => {
            return <div className="mt-2">{a}</div>;
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
