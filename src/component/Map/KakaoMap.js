import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import '../../pages/Map/styled';

import { useDispatch, useSelector } from 'react-redux';
import { MarkerIdAction } from '../../store/markerId';

function KakaoMap({ currentLat, currentLng, markerLocation, mapRef }) {
  //클릭된 마커 저장(카페id)
  const dispatch = useDispatch();
  const markerIdSaveHandler = (id) => {
    dispatch(MarkerIdAction.selected(id));
  };

  const onClickMarker = (key) => {
    console.log('key??', key);
    markerIdSaveHandler(key);
  };

  const reduxMarker = useSelector((state) => state.marker.markerId);
  let markerUrl = `marker_brown`;

  console.log('카카오', currentLat, currentLng);
  return (
    <>
      {/* 지도 표시 container */}
      <Map
        center={{
          // 지도의 중심좌표
          lat: currentLat,
          lng: currentLng,
        }}
        id="kakaoMap"
        level={5} // 지도의 확대 레벨
        ref={mapRef}
      >
        {markerLocation.map((it, key) => {
          if (reduxMarker === it.id) {
            markerUrl = 'marker_color';
          } else {
            markerUrl = 'marker_brown';
          }
          return (
            <MapMarker
              key={it.id}
              title={it.name}
              position={{
                lat: it.lat,
                lng: it.lng,
              }}
              image={{
                src: process.env.PUBLIC_URL + `/image/${markerUrl}.png`,
                size: { width: 50, height: 50 },
              }}
              onClick={() => onClickMarker(it.id)}
            />
          );
        })}
      </Map>
    </>
  );
}

export default KakaoMap;
