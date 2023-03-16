import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import { BookingCard } from './BookingCreateForm';
import Carousel from './Carousel';
import Map from './Map';
import fakeData from './utils';
import ModalPopUp from './ModalPopUp';

const RentalDetail = () => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [type, setType] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);
  const [bathCount, setBathCount] = useState(0);
  const [owner, setOwner] = useState(null);
  const [amenities, setAmenities] = useState([]);
  const [amenitiesBrief, setAmenitiesBrief] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isSuperHost, setIsSuperHost] = useState(false);
  const [location, setLocation] = useState('');
  const [pricePerNight, setPricePerNight] = useState(null);
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState(null);
  const [averageRating, setAverageRating] = useState(0);
  const [bedrooms, setBedrooms] = useState([]);
  const { rentalId } = useParams();
  const [description, setDescription] = useState('');
  const fetchRentalsUrl = `http://localhost:8082/api/rentals/${rentalId}`;
  const fetchRentalData = async () => {
    const response = await fetch(fetchRentalsUrl);
    console.log('response', response);
    if (response.ok) {
      const data = await response.json();
      const bds = data.bedrooms.map((el) => {
        const bs = el.beds.length ? JSON.parse(el.beds[0]) : {};
        return {
          id: el.id,
          ...bs,
        };
      });
      const ams = Object.keys(data.amenity).filter((key) => {
        return data.amenity[key] === true;
      });
      const rvs = data.reviews.map((el) => {
        return {
          ...JSON.parse(el),
        };
      });
      console.log('rvs', rvs);
      const avgr =
        rvs.reduce((acc, el) => acc + (el.rating || 0), 0.0) / rvs.length;

      console.log('bds', bds);
      console.log('data', data);
      const tt = data.city + ' ' + data.state;
      setImages(fakeData.images);
      setType(data.rental_type || fakeData.type);
      setMaxGuests(data.max_guests || fakeData.maxGuests);
      setBathCount(data.bath_count || fakeData.bathCount);
      setOwner(data.host || fakeData.owner);
      setAmenities(ams || fakeData.amenities);
      setAmenitiesBrief(fakeData.amenitiesBrief);
      setReviews(rvs || fakeData.reviews);
      setTitle(tt || fakeData.title);
      setIsSuperHost(data.host?.isSuperHost || fakeData.isSuperHost);
      setLocation(fakeData.location);
      setPricePerNight(data.price_per_night || fakeData.pricePerNight);
      setPriceBeforeDiscount(
        data.price_before_discount || fakeData.priceBeforeDiscount
      );
      setAverageRating(avgr || fakeData.averageRating);
      setBedrooms(bds || fakeData.bedrooms);
      setDescription(data.description || fakeData.description);
    } else {
      setImages(fakeData.images);
      setType(fakeData.type);
      setMaxGuests(fakeData.maxGuests);
      setBathCount(fakeData.bathCount);
      setOwner(fakeData.owner);
      setAmenities(fakeData.amenities);
      setAmenitiesBrief(fakeData.amenitiesBrief);
      setReviews(fakeData.reviews);
      setTitle(fakeData.title);
      setIsSuperHost(fakeData.isSuperHost);
      setLocation(fakeData.location);
      setPricePerNight(fakeData.pricePerNight);
      setPriceBeforeDiscount(fakeData.priceBeforeDiscount);
      setAverageRating(fakeData.averageRating);
      setBedrooms(fakeData.bedrooms);
      setDescription(fakeData.description);
    }
  };

  useEffect(() => {
    fetchRentalData();
  }, []);
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <StarFill />
        <div className="d-flex ms-3" style={{ marginTop: -3 }}>
          <p className="ms-2 me-2">{averageRating.toFixed(1)}</p>
          <p className="ms-2 me-2">{isSuperHost ? 'Superhost' : ''}</p>
          <p className="ms-2 me-2">{location}</p>
        </div>
      </div>
      <Carousel images={images} />
      <div className="mt-5"></div>
      <div className="d-flex justify-content-between mt-5">
        <div>
          <div className="mb-5"></div>
          {/* <img src={images[0]} alt="rental" width="300" /> */}
          <div
            className="d-flex justify-content-between"
            style={{ maxWidth: '100%' }}
          >
            <div className="me-5">
              <h4 className="m5-4">
                {type} hosted by {owner?.first_name || fakeData.owner.name}
              </h4>
              <div className="mt-4">
                <div className="d-flex">
                  <p className="me-2">{maxGuests} guests</p>
                  {'•'}
                  <p className="ms-2 me-2">{bedrooms.length} bedrooms</p>
                  {'•'}
                  <p className="ms-2 me-2">
                    {bedrooms.reduce((acc, el) => acc + (el.bed_count || 0), 0)}{' '}
                    beds
                  </p>
                  {'•'}
                  <p className="ms-2 me-2">{bathCount} baths</p>
                </div>
              </div>
            </div>
            <Image
              roundedCircle
              width={50}
              height={50}
              src={owner?.photo || fakeData.owner.avatar}
            />
          </div>
          <hr />
          <div className="mb-5"></div>
          <div>
            {amenitiesBrief.map((el, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-start align-items-center mb-4"
              >
                <Image
                  src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                  width="30"
                  height="30"
                />
                <div className="ms-3">
                  <h6>{Object.keys(el)[0]}</h6>
                  <p>{Object.values(el)[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BookingCard
          rentalId={rentalId}
          pricePerNight={pricePerNight}
          priceBeforeDiscount={priceBeforeDiscount}
          averageRating={averageRating}
          reviewsCount={reviews.length}
        />
      </div>
      <div className="mt-5"></div>
      <hr />
      <div className="p-5 d-flex justify-content-between">
        <div style={{ maxWidth: 500 }}>
          <div className="display-6 mb-4">Description</div>
          <p style={{ lineHeight: '2rem' }}>{description}</p>
          <a href="#">Show More</a>
        </div>
        {/* <Map width="300px" height="300px" lat={lat} lng={lng}/> */}
        <Map width="300px" height="300px" />
      </div>
      <hr />
      <div>
        <h4 className="mt-5 mb-5">What this place offers</h4>

        <div className="container">
          {amenities.map((el, idx) => {
            if (idx % 2 === 0)
              return (
                <div className="row" key={idx}>
                  <div className="col d-flex">
                    <Image
                      src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                      width={30}
                      heigth={30}
                    />
                    <p className="mt-1 ms-2">{el}</p>
                  </div>
                  <div className="col d-flex">
                    <Image
                      src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                      width={30}
                      heigth={30}
                    />
                    <p className="mt-1 ms-2">{amenities[idx + 1]}</p>
                  </div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
              );
          })}
        </div>
        <ModalPopUp message={'show all amenities'} ams={amenities} />

        <hr />
        <div className="mb-5"></div>
      </div>
      <div>
        <div className="d-flex justify-content-start">
          <StarFill />
          <p className="ms-2 me-2">{parseInt(averageRating).toFixed(1)}</p>
          <p className="ms-2 me-2">•</p>
          <p style={{ fontSize: 18 }}>{reviews.length} reviews</p>
        </div>
      </div>
      <div className="container">
        {reviews.map(
          (el, idx) =>
            idx % 2 == 0 && (
              <div className="row mt-2 mb-5" key={idx}>
                <div className="col">
                  <div className="d-flex">
                    <Image
                      roundedCircle
                      width={60}
                      height={60}
                      src={el.user?.photo}
                    />
                    <div>
                      <p className="ms-3">{el.user.first_name}</p>
                      <p className="ms-3">{el.date.split('T')[0]}</p>
                    </div>
                  </div>
                  <p className="mt-2">{el.comment}</p>
                </div>
                <div className="col">
                  <div className="d-flex">
                    <Image
                      roundedCircle
                      width={60}
                      height={60}
                      src={reviews[idx + 1]?.user?.photo}
                    />
                    <div>
                      <p className="ms-3">
                        {reviews[idx + 1]?.user?.first_name}
                      </p>
                      <p className="ms-3">
                        {reviews[idx + 1]?.date.split('T')[0]}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">{reviews[idx + 1]?.comment}</p>
                </div>
              </div>
            )
        )}
        <Button className="mt-5 mb-5" variant="outline-secondary">
          Show all reviews
        </Button>
        <hr />
      </div>
    </div>
  );
};

export default RentalDetail;
