import React from 'react';
import Card from 'react-bootstrap/Card';
import { StarFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/esm/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const BookingCard = ({
  priceBeforeDiscount = 283,
  pricePerNight = 168,
  startDate = '3/19/2023',
  endDate = '3/24/2023',
  averageRating = 5,
  reviewsCount = 16,
  numGuests = 1,
}) => {
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
              value={startDate}
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
              value={endDate}
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
              value={numGuests}
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

        <Button variant="danger w-100">Reserve</Button>
      </Card.Body>
    </Card>
  );
};

const BookingForm = () => {
  return <div>form</div>;
};

export default BookingCard;
