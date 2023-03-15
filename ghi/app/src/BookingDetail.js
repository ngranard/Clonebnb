import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

function BasicExample() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(1);
  const [hasPets, setHasPets] = useState(false);
  const [guest, setGuest] = useState(null);
  const [rental, setRental] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [rentalType, setRentalType] = useState('Entire Place');
  const [owner, setOwner] = useState(null);
  const [maxGuests, setMaxGuests] = useState(1);
  const [numBeds, setNumBeds] = useState(1);
  const [numBedrooms, setNumBedrooms] = useState(1);
  const [numBaths, setNumBaths] = useState(1);
  const [pricePerNight, setPricePerNight] = useState(0);
  const [rating, setRating] = useState(4);
  const [reviewCount, setReviewCount] = useState(0);
  const [description, setDescription] = useState(
    `This is a really perfect apartment for a deep-thinking and creative travelers, who want to relax or just to have a nice time and feel like home. I am a philosopher and artist, I have a lot of books, paintings and just a wonderful atmospheare in the house. I try to pay attention to cleaning and take care after my guests.  One room is very unusual, in the style of the scandinavian hugge.`
  );
  const [amenities, setAmenities] = useState([
    'Courtyard View',
    'Dedicated workspace',
    'Great Location',
    'Wifi',
    'Washer',
    'Kitchen',
    'Pets allowed',
    'Bathtub',
  ]);
  const [reviews, setReviews] = useState([
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
  ]);
  const [amenitiesBrief, setAmenitiesBrief] = useState([
    {
      'Dedicated workspace':
        'A private room with wifi that’s well-suited for working.',
    },
    {
      'Great Location':
        '90% of recent guests gave the location a 5-star rating.',
    },
    { 'Furry friends welcome': 'Bring your pets along for the stay' },
  ]);

  const { bookingId } = useParams();
  const fetchBookingData = async () => {
    if (!bookingId) return;
    const response = await fetch(
      `http://localhost:8080/api/bookings/${bookingId}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log('data', data);
      setStartDate(new Date(data.start_date));
      setEndDate(new Date(data.end_date));
      setNumGuests(data.num_guests);
      setHasPets(data.has_pets);
      setGuest(data.guest);
      setRental(data.rental);
      setImageUrl(data.guest.photo);
    } else {
      return;
    }
  };
  useEffect(() => {
    fetchBookingData();
  }, []);
  return (
    <div>
      <img src="https://a0.muscache.com/im/pictures/adf8c88a-88e7-414f-8741-a2bc287d3cd9.jpg?im_w=960"></img>
      <h4>
        {rentalType} hosted by {rental?.owner?.name}
      </h4>
    </div>
  );
}

export const BookingCard = ({
  imageUrl,
  rental,
  startDate,
  endDate,
  numGuests,
  hasPets,
}) => {
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{rental?.address}</Card.Title>
      <Card.Text>
        {new Date(startDate).toLocaleDateString()}-
        {new Date(endDate).toLocaleDateString()}
      </Card.Text>
      <Card.Text>Guests: {numGuests}</Card.Text>
      <Form.Check type={'checkbox'} id={`check-api-checkbox`}>
        <Form.Check.Input
          type={'checkbox'}
          isValid
          checked={hasPets}
          disabled={true}
        />
        <Form.Check.Label>Pets</Form.Check.Label>
      </Form.Check>
    </Card.Body>
  </Card>;
};

export default BasicExample;
