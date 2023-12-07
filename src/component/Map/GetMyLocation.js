import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GeoAction } from '../../store/geolocation';

function GetMyLocation() {
  // const dispatch = useDispatch();
  // const saveGeolocationHandler = (lat, lng) => {
  //   dispatch(GeoAction.getGeo({ lat, lng }));
  // };

  const [getGeolocation, setGetGeolocation] = useState();
  console.log('in?');
  navigator.geolocation.getCurrentPosition((position) => {
    console.log('geo', position);
    setGetGeolocation(position);
  });
  // if (getGeolocation) {
  //   console.log('???????');
  // currentLat = getGeolocation.coords.latitude;
  // currentLng = getGeolocation.coords.longitude;
  // saveGeolocationHandler(
  //   getGeolocation.coords.latitude,
  //   getGeolocation.coords.longitude
  // );
  // }
}

export default GetMyLocation;
