import React, { useEffect } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const RentalCard = ({
  img = 'https://a0.muscache.com/im/pictures/miso/Hosting-745787028816952393/original/2b38eb6e-0b90-4c5f-aa30-0636b0610b51.jpeg?im_w=720',
  location = 'Ahwahnee, California',
  availability = 'Mar 19 – 24',
  locDescription = '28 miles to Yosemite National Park',
  averageRating = 5,
  pricePerNight = 168,
  id = 1,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="card mb-3 shadow"
      onClick={() => {
        navigate(`/rentals/${id}`);
      }}
    >
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div className="card-title">{location}</div>
          <div className="d-flex">
            <StarFill />
            <div className="card-subtitle ms-1 text-muted">{averageRating}</div>
          </div>
        </div>
        <p className="card-subtitle mb-2 text-muted" style={{ fontSize: 12 }}>
          {locDescription}
        </p>
        <p>{availability}</p>
      </div>
      <div className="card-footer">
        <p>${pricePerNight} night</p>
      </div>
    </div>
  );
};

const RentalList = () => {
  const fakeRental = () => ({
    img: 'https://a0.muscache.com/im/pictures/miso/Hosting-745787028816952393/original/2b38eb6e-0b90-4c5f-aa30-0636b0610b51.jpeg?im_w=720',
    location: 'Ahwahnee, California',
    availability: 'Mar 19 – 24',
    locDescription: '28 miles to Yosemite National Park',
    averageRating: 5.0,
    pricePerNight: 168,
    id: 1,
  });
  const rentalArray = [
    fakeRental,
    fakeRental,
    fakeRental,
    fakeRental,
    fakeRental,
    fakeRental,
    fakeRental,
    fakeRental,
    fakeRental,
    fakeRental,
  ];
  const fetchRentals = async () => {
    const response = await fetch('http://localhost:8082/rentals');
    const data = await response.json();
    if (response.ok) console.log(data);
  };
  return (
    <div className="container">
      {rentalArray.map(
        (rental, idx) =>
          idx % 4 == 0 && (
            <div className="row">
              <div className="col">
                <RentalCard {...rental} />
              </div>
              <div className="col">
                <RentalCard {...rentalArray[idx + 1]} />
              </div>
              <div className="col">
                <RentalCard {...rentalArray[idx + 2]} />
              </div>
              <div className="col">
                <RentalCard {...rentalArray[idx + 3]} />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default RentalList;
