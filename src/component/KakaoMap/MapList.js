import React, { useState, useRef } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from 'axios';

import SearchBar from '../MainSearchBar/SearchBar';
import { LinkStyle } from '../../CommonStyled';
import {
  MapPageWrap,
  InnerWrap,
  InnerRWrap,
  KakaoMapWrap,
  MapInnerTop,
  GetLocationBtn,
  ListItem,
  ItemInner,
} from './styled';

import './MapList.css';

const { kakao } = window;

//page - 카카오지도 페이지 ( 현재 위치 별 카페 보기 페이지 )
const MapList = () => {
  const mapRef = useRef();
  const [cafesInCurMap, setCafesInCurMap] = useState();

  // let cafesInCurMap = null;
  const currentMapHandler = async () => {
    // 현재 지도 정보 설정
    const map = mapRef.current;
    const currentMapInfo = {
      swLatLng: {
        lat: map.getBounds().getSouthWest().getLat(),
        lng: map.getBounds().getSouthWest().getLng(),
      },
      neLatLng: {
        lat: map.getBounds().getNorthEast().getLat(),
        lng: map.getBounds().getNorthEast().getLng(),
      },
    };
    console.log(currentMapInfo.swLatLng.lat);

    // axios 요청
    const res = await axios
      .get
      // `http://api.cpp.co.kr:3300/cafes/map?swLat=${currentMapInfo.swLatLng.lat}&swLng=${currentMapInfo.swLatLng.lng}&neLat=${currentMapInfo.neLatLng.lat}&neLng=${currentMapInfo.neLatLng.lng}`
      ();

    setCafesInCurMap(res.data);
    console.log(cafesInCurMap);
  };

  return (
    <>
      <SearchBar />
      <MapPageWrap>
        <InnerWrap>
          <MapInnerTop>
            <span>내 주변 카페보기</span>
            <GetLocationBtn onClick={currentMapHandler}>
              현 위치 가져오기
            </GetLocationBtn>
          </MapInnerTop>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: 33.33,
              lng: 126.55,
            }}
            id="kakaoMap"
            level={11} // 지도의 확대 레벨
            ref={mapRef}
          >
            {cafesInCurMap &&
              cafesInCurMap.map((item, index) => (
                <>
                  <MapMarker
                    key={index}
                    position={{
                      lat: item.lat,
                      lng: item.lng,
                    }}
                  >
                    {/* {item.name} */}
                  </MapMarker>
                  <CustomOverlayMap
                    position={{
                      lat: item.lat,
                      lng: item.lng,
                    }}
                    yAnchor={2.5}
                  >
                    <div id="markerName">{item.name}</div>
                  </CustomOverlayMap>
                </>
              ))}
          </Map>
        </InnerWrap>

        <InnerWrap>
          <MapInnerTop>
            <span>리스트 영역</span>
          </MapInnerTop>

          <div id="listWrap">
            <ListItem>
              <ItemInner></ItemInner>

              <ItemInner>
                <p className="mapPlaceName">소길별하</p>
                <p className="mapItemCafeAddr">제주시, 제주시 서부</p>
              </ItemInner>
            </ListItem>
            <ListItem>
              <ItemInner></ItemInner>

              <ItemInner>
                <p className="mapPlaceName">공간 이름</p>
                <p className="mapItemCafeAddr">주소</p>
              </ItemInner>
            </ListItem>
          </div>
        </InnerWrap>
      </MapPageWrap>
    </>
  );
};

export default MapList;
