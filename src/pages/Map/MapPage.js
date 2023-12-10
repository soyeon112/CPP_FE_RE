import React, { useState, useRef, useLayoutEffect } from 'react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MarkerIdAction } from '../../store/markerId';
import { GeoAction } from '../../store/geolocation';

import KakaoMap from '../../component/Map/KakaoMap';
import GetMyLocation from '../../component/Map/GetMyLocation';

import SearchBar from '../../component/MainSearchBar/SearchBar';
import {
  MapPageWrap,
  InnerWrap,
  InnerWrapMap,
  InnerWrapList,
  MapInnerTop,
  GetLocationBtn,
  MapLayer,
  InnerLayer,
  ThumbLink,
  ListItem,
  ItemInner,
  MapPlaceName,
} from './styled';
import { mainColor, LinkStyle } from '../../CommonStyled';

import dummy from '../../storeDummy.json';
import { Link } from 'react-router-dom';

//page - 카카오지도 페이지 ( 현재 위치 별 카페 보기 페이지 )
function MapPage() {
  let selectColor; //선택된 항목의 text color 변수

  // -- 리덕스 (맵에서 선택된 마커 id)
  const reduxMarker = useSelector((state) => state.marker.markerId);
  const reduxLat = useSelector((state) => state.geolocation.lat);
  const reduxLng = useSelector((state) => state.geolocation.lng);

  //선택된 카페 id 리덕스 저장
  const dispatch = useDispatch();
  const selectListHandler = (id) => {
    dispatch(MarkerIdAction.selected(id));
  };

  // -- 더미 데이터에서 '위경도, 이름, 주소, 썸네일'만 추출해서 배열로 저장
  let markerArr = [];
  dummy.map((it) => {
    markerArr.push({
      id: it.id,
      name: it.cafe.name,
      lat: it.location.lat,
      lng: it.location.lng,
      address: it.cafe.address,
      thumb: it.photoURLs[0],
    });
  });

  // -- 카카오 맵 관련
  const mapRef = useRef();
  const [cafesInCurMap, setCafesInCurMap] = useState();
  const currentMapHandler = async () => {
    // 현재 지도 정보 설정
    const map = mapRef.current;
    console.log('map', map);
    const currentMapInfo = {
      //남서쪽
      swLatLng: {
        lat: map.getBounds().getSouthWest().getLat(),
        lng: map.getBounds().getSouthWest().getLng(),
      },
      //북동쪽
      neLatLng: {
        lat: map.getBounds().getNorthEast().getLat(),
        lng: map.getBounds().getNorthEast().getLng(),
      },
    };

    console.log('currentMap Info', map.getCenter());
  };

  return (
    <Fragment>
      {/* <SearchBar /> */}
      <MapPageWrap>
        <InnerWrapMap>
          <MapInnerTop className="mapTitleWrap">
            <span className="mapTitle">내 주변 카페보기</span>
            <GetMyLocation />
          </MapInnerTop>
          {markerArr ? (
            <KakaoMap
              currentLat={reduxLat}
              currentLng={reduxLng}
              markerLocation={markerArr}
              mapRef={mapRef}
            />
          ) : (
            ''
          )}
          {/* 500px일때 맵 하단 인포 레이어 */}
          <MapLayer>
            <InnerLayer>
              {Object.entries(markerArr).map((it, key) => {
                if (it[1].id === reduxMarker) {
                  return (
                    <>
                      {/* <div className="layerThumb" src={it[1].thumb} /> */}
                      <p className="layerTitle">{it[1].name}</p>
                    </>
                  );
                }
              })}
            </InnerLayer>
          </MapLayer>
        </InnerWrapMap>

        <InnerWrapList>
          <MapInnerTop>
            <span className="mapTitle">카페 목록</span>
            <span className="mapSubTitle">
              썸네일 클릭시 해당 카페의 포스팅으로 이동합니다.
            </span>
          </MapInnerTop>

          <div id="listWrap">
            {markerArr
              ? markerArr.map((it, key) => {
                  if (reduxMarker === it.id) {
                    selectColor = mainColor;
                  } else {
                    selectColor = '#000';
                  }

                  //주소 '건물번호' 기준으로 자름
                  let addr = it.address.split(' ', 5);
                  return (
                    <ListItem onClick={() => selectListHandler(it.id)}>
                      <ThumbLink to={`/post/${it.id}`} url={it.thumb}>
                        <ItemInner className="mapPlaceImg" url={it.thumb} />
                      </ThumbLink>

                      <ItemInner>
                        <MapPlaceName color={selectColor}>
                          {it.name}
                        </MapPlaceName>
                        <p className="mapItemCafeAddr">{addr.join(' ')}</p>
                      </ItemInner>
                    </ListItem>
                  );
                })
              : ''}
          </div>
        </InnerWrapList>
      </MapPageWrap>
    </Fragment>
  );
}

export default MapPage;
