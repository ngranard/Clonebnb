import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import { BookingCard } from './BookingCreateForm';
import Carousel from './Carousel';

const RentalDetail = () => {
  const fakeData = {
    averageRating: 5,
    title: 'Stargazing Retreat - Yosemite/ Hot Tub/Fire Pit',
    images: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-745787028816952393/original/2b38eb6e-0b90-4c5f-aa30-0636b0610b51.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/5d16e96c-4625-44e9-b119-083113cfde84.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/4c18ee15-7b5a-455b-b50f-330ab251db69.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-745787028816952393/original/7d9035bd-f51a-437b-a58f-d4b91bce644f.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-745787028816952393/original/e69b6ae7-c042-4517-aaa5-a3210b5fbf1e.jpeg?im_w=720',
    ],
    type: 'Entire apartment',
    maxGuests: 10,
    bedrooms: [
      { bedType: 'Queen bed', count: 1 },
      { bedType: 'Single bed', count: 2 },
      { bedType: 'Sofa bed', count: 3 },
      { bedType: 'Queen bed', count: 1 },
    ],
    bathCount: 2,
    owner: {
      avatar:
        'https://a0.muscache.com/im/pictures/user/2663bbcf-bad4-465a-96c2-df71336a0cb7.jpg?im_w=240',
      name: 'John Doe',
    },
    amenitiesBrief: [
      {
        'Dedicated workspace':
          'A private room with wifi that’s well-suited for working.',
      },
      {
        'Great Location':
          '90% of recent guests gave the location a 5-star rating.',
      },
      { 'Furry friends welcome': 'Bring your pets along for the stay' },
    ],
    amenities: [
      'Courtyard View',
      'Dedicated workspace',
      'Great Location',
      'Wifi',
      'Washer',
      'Kitchen',
      'Pets allowed',
      'Bathtub',
    ],
    reviews: [
      {
        user: 'John',
        userAvatar:
          'https://a0.muscache.com/im/pictures/user/d8d5c151-e90d-455d-be22-fbcae5c9dd74.jpg?im_w=240',
        date: '2021-01-01',
        rating: 5,
        comment:
          'Marina and her mom are very polite and pleasure people. I can recommend',
      },
      {
        user: 'Jane',
        userAvatar:
          'https://a0.muscache.com/im/pictures/user/909d15cb-ad75-467d-9d9d-639fde8b19f6.jpg?im_w=240',
        date: '2021-01-01',
        rating: 5,
        comment: 'It is a great apartment.',
      },
      {
        user: 'Jack',
        userAvatar:
          'https://a0.muscache.com/im/pictures/user/f079abec-6714-4ba7-81fe-695cd875f5d4.jpg?im_w=240',
        date: '2021-01-01',
        rating: 5,
        comment:
          'I was unable to visit because of Putin"s invasion. Once the Ukrainians prevail, I hope to visit. I wish Marina and her family the best.',
      },
      {
        user: 'Jill',
        userAvatar:
          'https://a0.muscache.com/im/pictures/user/d9bdf7fa-f03e-4931-8ab5-6c44a20caecd.jpg?im_w=240',
        date: '2021-01-01',
        rating: 5,
        comment:
          'I hope Marina and her family are doing well. I plan on visiting when this conflict is over',
      },
    ],
    location: 'Ahwahnee, California, United States',
    pricePerNight: 168,
    priceBeforeDiscount: 200,
    description:
      'Large, modern home situated on a breathtaking property carved out of the hillside. Amazing views from all over the property, with expansive outdoor space that includes a hot tub and a pool.  Close to Oakhurst, Bass Lake, and Yosemite High speed Wi Fi Dedicated work space The space Almost new home, modern home on a large property. Secluded, yet close to town and Yosemite. Large house with high ceilings and great views from most rooms.',
  };

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
  const fetchRentalData = async () => {
    // const response = await fetch(
    //   `http://localhost:8081/api/rentals/${rentalId}`
    // );
    // const data = await response.json();
    // if (response.ok) {
    //   alert('working yeah!');
    // }
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
                {type} hosted by {owner?.name}
              </h4>
              <div className="mt-4">
                <div className="d-flex">
                  <p className="me-2">{maxGuests} guests</p>
                  {'•'}
                  <p className="ms-2 me-2">{bedrooms.length} bedrooms</p>
                  {'•'}
                  <p className="ms-2 me-2">
                    {bedrooms.reduce((acc, el) => acc + el.count || 0, 0)} beds
                  </p>
                  {'•'}
                  <p className="ms-2 me-2">{bathCount} baths</p>
                </div>
              </div>
            </div>
            <Image roundedCircle width={50} height={50} src={owner?.avatar} />
          </div>
          <hr />
          <div className="mb-5"></div>
          <div>
            {amenitiesBrief.map((el) => (
              <div className="d-flex justify-content-start align-items-center mb-4">
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
        <BookingCard />
      </div>
      <div className="mt-5"></div>
      <hr />
      <div className="p-5">
        <p style={{ lineHeight: '2rem' }}>{description}</p>
        <a href="#">Show More</a>
      </div>
      <hr />
      <div>
        <h4 className="mt-5 mb-5">What this place offers</h4>

        <div className="container">
          {amenities.map((el, idx) => {
            if (idx % 2 === 0)
              return (
                <div className="row">
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
        <Button className="mt-5 mb-5" variant="outline-secondary">
          Show all amenities
        </Button>
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
              <div className="row mt-2 mb-5">
                <div className="col">
                  <div className="d-flex">
                    <Image
                      roundedCircle
                      width={60}
                      height={60}
                      src={el.userAvatar}
                    />
                    <div>
                      <p className="ms-3">{el.user}</p>
                      <p className="ms-3">{el.date}</p>
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
                      src={reviews[idx + 1]?.userAvatar}
                    />
                    <div>
                      <p className="ms-3">{reviews[idx + 1]?.user}</p>
                      <p className="ms-3">{reviews[idx + 1]?.date}</p>
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
