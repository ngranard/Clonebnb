import React from 'react';
import Card from 'react-bootstrap/Card';
import { StarFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/esm/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import BookingNewModal from './BookingModal';

function BookingModal({ sDate, eDate, nGuests, show, cb }) {
  const navigate = useNavigate();
  return (
    <div
      className={`modal ${show ? '' : 'd-none'}`}
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Successfully Booked!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>from: {sDate}</p>
          <p>to: {eDate}</p>
          <p>number of guests: {nGuests}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              cb();
              navigate('/rentals');
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export const BookingCard = ({
  priceBeforeDiscount = 283,
  pricePerNight = 168,
  startDate = '3/19/2023',
  endDate = '3/24/2023',
  averageRating = 5,
  reviewsCount = 16,
  numGuests = 1,
}) => {
  const [sDate, setSDate] = React.useState(startDate);
  const [eDate, setEDate] = React.useState(endDate);
  const [nGuests, setNGuests] = React.useState(numGuests);
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleSubmit = () => {
    console.log(sDate, eDate, nGuests);
    setSDate('');
    setEDate('');
    setNGuests(1);
    navigate('/rentals');
  };
  return (
    <Card className="pt-4 p-2" style={{ width: '400px' }}>
      <Card.Body>
        <Card.Title>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p
                className="text-muted me-2"
                style={{ textDecoration: 'line-through' }}
              >
                ${priceBeforeDiscount}
              </p>
              <p className="text text-bold">${pricePerNight}</p>
              <figure
                className="ms-2"
                style={{ fontSize: 14, fontWeight: 300, marginTop: '0.3rem' }}
              >
                night
              </figure>
            </div>
            <div className="d-flex">
              <StarFill width={'0.7em'} />
              <p className="text-muted ms-1">{averageRating}</p>
              <p className="ms-2 me-2">•</p>
              <a className="text-muted ms-1">{reviewsCount} review</a>
            </div>
          </div>
        </Card.Title>
        <div>
          <div className="form-floating mb-3">
            <input
              value={sDate}
              onChange={(e) => setSDate(e.target.value)}
              placeholder="Appointment Time"
              required
              type="date"
              name="appointment-time"
              id="appointment-time"
              className="form-control"
            />
            <label htmlFor="appointment-time">Start Date</label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={eDate}
              onChange={(e) => setEDate(e.target.value)}
              placeholder="Appointment Time"
              required
              type="date"
              name="appointment-time"
              id="appointment-time"
              className="form-control"
            />
            <label htmlFor="appointment-time">End Date</label>
          </div>
          <div className="form-floating mb-3">
            <input
              value={nGuests}
              onChange={(e) => setNGuests(e.target.value)}
              placeholder="Appointment Time"
              required
              type="number"
              name="appointment-time"
              id="appointment-time"
              className="form-control"
            />
            <label htmlFor="appointment-time">Number of Guests</label>
          </div>
        </div>

        <BookingModal
          sDate={sDate.toString()}
          eDate={eDate.toString()}
          nGuests={nGuests.toString()}
          show={show}
          cb={() => handleSubmit()}
        />
        <BookingNewModal
          message="reserve"
          sDate={sDate}
          eDate={eDate}
          nGuests={nGuests}
          show={show}
          setShow={setShow}
        />

        {/* <Button variant="danger w-100" onClick={() => setShow(true)}>
          Reserve
        </Button> */}
      </Card.Body>
    </Card>
  );
};

const BookingForm = () => {
  return <div>form</div>;
};

export default BookingCard;
