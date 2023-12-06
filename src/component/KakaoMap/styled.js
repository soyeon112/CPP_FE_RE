import styled from 'styled-components';
import {
  mainColor,
  grayColor,
  lightGrayColor,
  MainColorBorderBtn,
  grayLine,
} from '../../CommonStyled';

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
    flex-direction: column;
  }
  @media (max-width: 500px) {
  }
`;

export const MapInnerTop = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1rem;
    font-family: 'PreB';
    color: ${mainColor};
  }

  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    span {
      font-size: 0.9rem;
    }
  }
`;

export const GetLocationBtn = styled(MainColorBorderBtn)`
  width: auto;
  height: 90%;
  padding: 0 10px;
  font-family: 'PreB';
  font-size: 0.8rem;
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

export const InnerWrap = styled.div`
  width: 50%;
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
  }

  @media (max-width: 820px) {
    width: 100%;

    #listWrap {
      width: 100%;
      height: auto;
      border: none;
    }
  }
  @media (max-width: 500px) {
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
  align-items: center;

  @media (max-width: 820px) {
    margin: 10px auto;
  }
`;

export const ItemInner = styled.div`
  width: 60%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${lightGrayColor};

  &:first-child {
    width: 40%;
    margin-right: 5px;
  }
  &:last-child {
    margin-left: 5px;
    &:hover {
      cursor: pointer;
      .mapPlaceName {
        color: ${mainColor};
      }
    }
  }

  p {
    margin: 10px 0;
    font-size: 0.8rem;
    color: ${grayColor};
  }
  .mapPlaceName {
    font-family: 'PreB';
    font-size: 1.1rem;
    color: #000;
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.8rem;
    }
    .mapPlaceName {
      font-size: 0.9rem;
    }
  }
`;
