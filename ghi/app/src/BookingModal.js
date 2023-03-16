import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function MyModal({ message, sDate, eDate, nGuests, show, setShow }) {
  const handleClose = () => {
    setShow(false);
    navigate('/rentals');
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="danger" onClick={handleShow} className="mt-5">
        {message}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enjoy Your stay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>From: {sDate}</div>
          <div>to: {eDate}</div>
          <div>Number of guests: {nGuests}</div>
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
