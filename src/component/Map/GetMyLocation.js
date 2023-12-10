import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GeoAction } from '../../store/geolocation';
import { GetLocationBtn } from '../../pages/Map/styled';

function GetMyLocation() {
  const dispatch = useDispatch();
  const saveGeolocationHandler = (lat, lng) => {
    dispatch(GeoAction.getGeo({ lat, lng }));
  };

  let lat, lng;

  const getLocation = () => {
    console.log('버튼클릭');
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        console.log(
          '값이 있음',
          (lat = position.coords.latitude),
          (lng = position.coords.longitude)
        );
        saveGeolocationHandler(lat, lng);
      }
    });
  };

  useLayoutEffect(() => {
    getLocation();
  }, []);

  return (
    <GetLocationBtn onClick={() => getLocation()}>
      현 위치 가져오기
    </GetLocationBtn>
  );
}

export default GetMyLocation;
