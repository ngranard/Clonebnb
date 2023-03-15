import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({ images }) {
  return (
    <Carousel>
      {images.map((img) => (
        <Carousel.Item>
          <img className="d-block w-100 rounded" src={img} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
