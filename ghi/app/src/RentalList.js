import React, { useEffect, useState } from 'react';
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
  const [rentals, setRentals] = useState([]);
  const fetchAllRentals = async () => {
    const response = await fetch('http://localhost:8082/api/rentals/');
    if (response.ok) {
      const data = await response.json();
      console.log('data', data);
      const res = data.rentals.map((d, idx) => {
        return {
          img: imageLinks[idx],
          location: d.city + ', ' + d.state,
          availability: d.availability || fakeRental.availability,
          locDescription: d.locDescription || fakeRental.locDescription,
          averageRating:
            d.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
              d.reviews.length || fakeRental.averageRating,
          pricePerNight: d.price_per_night,
          priceBeforeDiscount: d.price_before_discount,
          id: d.id,
        };
      });
      if (res.length > 0) setRentals(res);
      else
        setRentals([
          fakeRental,
          fakeRental,
          fakeRental,
          fakeRental,
          fakeRental,
        ]);
    }
  };

  const imageLinks = [
    'https://ssl.cdn-redfin.com/photo/10/bigphoto/582/41019582_0.jpg',
    'https://ssl.cdn-redfin.com/photo/10/bigphoto/582/41019582_4_0.jpg',
    'https://ssl.cdn-redfin.com/photo/10/bigphoto/582/41019582_7_0.jpg',
    'https://ssl.cdn-redfin.com/photo/10/bigphoto/582/41019582_3_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/524/423727524_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/524/423727524_9_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/524/423727524_44_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/524/423727524_80_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/527/423726527_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/527/423726527_6_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/527/423726527_31_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/527/423726527_37_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/248/423725248_1_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/248/423725248_2_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/248/423725248_17_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/248/423725248_5_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/232/423727232_23_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/232/423727232_5_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/232/423727232_1_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/232/423727232_24_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/037/423724037_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/037/423724037_6_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/037/423724037_7_0.jpg',
    'https://ssl.cdn-redfin.com/photo/9/bigphoto/037/423724037_14_0.jpg',
    'https://ssl.cdn-redfin.com/photo/8/bigphoto/069/ML81919069_0.jpg',
    'https://ssl.cdn-redfin.com/photo/8/bigphoto/069/ML81919069_5_0.jpg',
    'https://ssl.cdn-redfin.com/photo/8/bigphoto/069/ML81919069_9_0.jpg',
  ];

  const fakeRental = () => ({
    img: 'https://a0.muscache.com/im/pictures/miso/Hosting-745787028816952393/original/2b38eb6e-0b90-4c5f-aa30-0636b0610b51.jpeg?im_w=720',
    location: 'Ahwahnee, California',
    availability: 'Mar 19 – 24',
    locDescription: '28 miles to Yosemite National Park',
    averageRating: 5.0,
    pricePerNight: 168,
    id: 1,
  });

  useEffect(() => {
    fetchAllRentals();
  }, []);
  return (
    <div className="container">
      {rentals.map(
        (rental, idx) =>
          idx % 4 == 0 && (
            <div className="row" key={idx}>
              <div className="col">
                <RentalCard {...rental} />
              </div>

              {rentals[idx + 1] ? (
                <div className="col">
                  <RentalCard {...rentals[idx + 1]} />
                </div>
              ) : (
                <div className="col"></div>
              )}
              {rentals[idx + 2] ? (
                <div className="col">
                  <RentalCard {...rentals[idx + 2]} />
                </div>
              ) : (
                <div className="col"></div>
              )}
              {rentals[idx + 3] ? (
                <div className="col">
                  <RentalCard {...rentals[idx + 3]} />
                </div>
              ) : (
                <div className="col"></div>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default RentalList;
