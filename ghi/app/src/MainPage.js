import React from 'react';
import Map from './Map';

const MainPage = () => {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-danger">
            <h1 className="display-1">Airbnb it</h1>
          </div>
          <div>
            <h3 className="display-4">You could earn</h3>
          </div>
          <div>
            <h1 className="display-2">$1,211</h1>
          </div>
          <div>
            <span className="text-decoration-underline">7 nights</span>{' '}
            <span className="text-muted">at an estimated $173 a night</span>
          </div>
          <div>
            <input
              type="range"
              className="form-range mt-5"
              style={{ minWidth: 300, color: 'black' }}
              value={10}
              disabled
            />
          </div>
          <div className="mb-3">
            <p className="text-decoration-underline text-muted">
              learn how we estimate your earnings
            </p>
          </div>
          <div
            className="d-flex justify-content-start align-items-center"
            style={{
              border: '2px solid #eee',
              height: 70,
              width: '100%',
              borderRadius: 30,
            }}
          >
            <i class="fa fa-search text-danger ms-4 me-2"></i>
            <div className="ms-2">
              <div style={{ fontWeight: 700 }}>San Francisco</div>
              <div className="text-muted">Entire place • 4 guests</div>
            </div>
          </div>
        </div>
        <Map />
      </div>
      <div
        className="text-center w-100 mt-5 display-5 mb-5"
        style={{ fontWeight: 400 }}
      >
        Airbnb it easily with Airbnb Setup
      </div>
      <div
        style={{
          backgroundImage:
            'url(https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '400px',
        }}
      ></div>
    </div>
  );
};

export default MainPage;
