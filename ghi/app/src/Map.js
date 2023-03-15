import React from 'react';
import GoogleMapReact from 'google-map-react';
import GK from './keys';

const Marker = ({ text }) => <div>{text}</div>;

export default function Map({ width = '50%', height = '40vh' }) {
  const mks = [
    { lat: 37.7647, lng: -122.4394 },
    { lat: 37.7747, lng: -122.4194 },
    { lat: 37.785, lng: -122.4294 },
    { lat: 37.7949, lng: -122.4394 },
  ];
  const rm = (map, maps, markers) => {
    return markers.map((marker) =>
      renderMarkers(map, maps, marker.lat, marker.lng)
    );
  };
  const renderMarkers = (map, maps, lat, lng) => {
    let marker = new maps.Marker({
      position: { lat: lat, lng: lng },
      map,
      title: 'Hello World!',
    });
    return marker;
  };
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 13,
  };

  return (
    <div
      className="shadow-lg"
      style={{
        height: height,
        width: width,
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: GK }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => rm(map, maps, mks)}
      >
        {/* {mks.map((marker) => (
          <Marker lat={marker.lat} lng={marker.lng} text={'A'} />
        ))} */}
      </GoogleMapReact>
    </div>
  );
}
