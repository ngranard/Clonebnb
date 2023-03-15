import {React, useEffect, useState } from 'react';
import key from '.gitignore';
function MapView() {
    const fetchdata = async () => {
        const response = await fetch('http://tbd');
        await response.json();

        const data = {};
        const lat = data.lat;
        const long = data.long;
        const center = lat + long; // this will be from a different request
        const address = data.address;

        const paramaters = {
            center: "Camarillo" + "CA",
            zoom: 15,
            maptype: 'satellite',
            size: '400x400',
            key: key,
            markers: `color:red%7Clabel:C%7C${lat},${long}`,
        }
         map_src = `https://maps.googleapis.com/maps/api/staticmap?${paramaters}`;
    }

    // potential(most likely) this is for dynamic map, passing lat and long still works the same
    // would move into fetch data to render page after all componets are ready to render
    let map;

    function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        // markers: `color:red%7Clabel:C%7C${lat},${long}`,
        // believe marker should work as a proppassed this way
    });
    }
    // end potential

    // simpler method for dynamic map render/create
    const loader = new Loader({
        apiKey: `${key}`,
        version: "weekly",
        // ...additionalOptions,
      });
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        // markers: `color:red%7Clabel:C%7C${lat},${long}`,
        // believe marker should work as a proppassed this way
        });
      });
    //   end simpler

    useEffect(() => {
        fetchdata();
        initMap();
    }, []);

    return (
        <div className = "mapDiv" id ="map">
            <img className="map" src = {map_src} />
        </div>
        )
}
export default MapView;
