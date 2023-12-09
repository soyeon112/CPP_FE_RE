import styled from 'styled-components';
import {
  mainColor,
  grayColor,
  lightGrayColor,
  MainColorBorderBtn,
  grayLine,
} from '../../CommonStyled';
import { Link } from 'react-router-dom';

export const MapPageWrap = styled.div`
  width: 990px;
  height: auto;
  margin: 20px auto 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MapInnerTop = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .mapTitle {
    display: inline-block;
    width: 50%;
    margin-right: 10px;
    font-size: 1rem;
    font-family: 'PreB';
    color: ${mainColor};
  }
  .mapSubTitle {
    font-size: 0.6rem;
    font-family: 'PreR';
    color: ${grayColor};
  }

  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    .mapTitle {
      width: 30%;
      font-size: 0.9rem;
    }
    .mapSubTitle {
      font-size: 0.7rem;
    }
  }
`;

export const GetLocationBtn = styled(MainColorBorderBtn)`
  /* width: 30%; */
  height: 90%;
  padding: 0 10px;
  font-family: 'PreB';
  font-size: 0.8rem;
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

export const InnerWrap = styled.div`
  /* width: 50%; */
  height: auto;
  padding: 10px;
  box-sizing: border-box;

  #kakaoMap,
  #listWrap {
    position: relative;
    height: 700px;
    margin-top: 10px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid ${lightGrayColor};
    overflow-y: auto;
  }

  @media (max-width: 820px) {
    #listWrap {
      width: 100%;
      height: auto;
      border: none;
    }
  }
  @media (max-width: 500px) {
    #kakaoMap {
      height: 450px;
    }
  }
`;

export const InnerWrapMap = styled(InnerWrap)`
  width: 50%;
  position: relative;
  @media (max-width: 820px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const InnerWrapList = styled(InnerWrap)`
  width: 50%;
  @media (max-width: 820px) {
    width: 30%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ListItem = styled.div`
  width: auto;
  height: 100px;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */

  @media (max-width: 820px) {
    margin: 10px auto;
  }
`;

export const ThumbLink = styled(Link)`
  width: 40%;
  height: 100%;
  margin-right: 5px;
`;

export const ItemInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 5px;
  background-color: ${lightGrayColor};

  &:first-child {
    /* width: 40%; */
    width: auto;
    margin-right: 5px;
    background-image: url(${(props) => process.env.PUBLIC_URL + props.url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;

    &:hover {
      cursor: pointer;
      transition: opacity 0.5s;
      opacity: 0.5;
    }
  }
  &:last-child {
    width: 100%;
    margin-left: 5px;

    &:hover {
      cursor: pointer;
      background-color: rgba(252, 82, 48, 0.1);
    }
  }

  p {
    margin: 10px 0;
  }
  .mapItemCafeAddr {
    font-size: 0.8rem;
    color: ${grayColor};
    line-height: 1rem;
  }

  @media (max-width: 820px) {
    .mapItemCafeAddr {
      font-size: 0.7rem;
    }
  }
`;

export const MapPlaceName = styled.p`
  font-family: 'PreB';
  font-size: 1.1rem;
  color: ${(props) => props.color || 'green'};

  @media (max-width: 820px) {
    font-size: 1rem;
  }
`;

export const MapLayer = styled.div`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 95%;
  height: 80px;
  padding: 15px;
  margin: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 10px 10px;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const InnerLayer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  .layerThumb {
    width: 20%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
  }
  .layerTitle {
    margin: 5px 0 0 20px;
    color: #fff;
    font-family: 'PreB';
    font-size: 1rem;
  }
`;
