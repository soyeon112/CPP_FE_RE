import styled from 'styled-components';
import { mainColor, grayColor, grayLine } from '../../CommonStyled';

export const InnerWidth = '480px';
export const PostWrap = styled.div`
  width: 645px;
  height: auto;
  margin: 10px auto 0 auto;
  padding-bottom: 20px;
  text-align: center;
  position: relative;
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

// 이미지 슬라이더
export const SliderWrap = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 480px;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  .sliderImgs {
    width: 100%;
    display: inline-block;
    height: 640px;
    border-radius: 10px;
  }

  @media (max-width: 500px) {
    width: 90%;
    padding: 0 20px 25px;
    box-sizing: border-box;
    margin: 0 auto;
    .sliderImgs {
      width: 100%;
      height: 400px;
      /* object-fit: contain; */
    }
  }
`;

export const ImageWrap = styled.div`
  width: 480px;
  height: auto;
  @media (max-width: 500px) {
  }
`;

export const UserInfoWrap = styled.div`
  position: absolute;
  left: 7px;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto; //130px
  height: 22px;
  padding: 2px 30px; //2px 15px 0 15px
  border-radius: 30px;
  border: none;
  /* background-color: #f0f0f0; */
  background-color: rgba(240, 240, 240, 0.8);
  .userIcon {
    /* position: absolute; */
    /* bottom: 5px;
    left: 15px; */
  }
  .nickname {
    font-size: 0.9rem;
    margin-left: 10px;
  }
  @media (max-width: 500px) {
    left: 22px;
    border-radius: 10px;
    bottom: 30px;
    .userIcon,
    .nickname {
      font-size: 0.8rem;
    }
  }
`;

// 카페 정보 및 각종 버튼
export const PlaceInfoWrap = styled.div`
  width: 480px;
  margin: 25px auto 0;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: ${grayLine};

  @media (max-width: 500px) {
    width: 85%;
    margin: 0 auto;
  }
`;
export const PlaceInfo = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
`;

export const PlaceInfoInnerL = styled.div`
  width: 70%;
  height: auto; //30px
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 5px 5px;
  box-sizing: border-box;

  .placeName {
    height: 100%;
    max-width: 85%;
    text-align: left;
    font-family: 'PreB';
    font-size: 1.3rem;
    color: ${mainColor};
    margin-right: 5px;
  }
  .infoIcon {
    width: 15px;
    height: 15px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    width: 55%;
    .placeName {
      font-size: 1.1rem;
    }
  }
`;
export const PlaceInfoInnerR = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .viewWrap {
    width: 30px;
    height: 30px;
  }

  .IconItem {
    width: 30px;
    font-size: 1.4rem;
    &:hover {
      cursor: ${(props) => (props.onClick ? 'pointer' : '')};
    }
  }
  .viewCount {
    font-size: 0.7rem;
  }
  @media (max-width: 500px) {
    width: 35%;
    .viewWrap {
      height: auto;

      .viewIcon {
        font-size: 0.8rem;
      }
    }

    .IconItem {
      font-size: 1rem;
    }

    .viewCount {
      font-size: 0.5rem;
      font-family: 'PreB';
    }
  }
`;

export const InfoPopup = styled.div`
  position: absolute;
  top: 0;
  left: -5px;
  width: ${InnerWidth};
  height: auto; //250px
  border-radius: 10px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;
    line-height: 1.5rem;
  }
  .title {
    font-size: 1.3rem;
    font-family: 'PreB';
    color: ${mainColor};
    margin-bottom: 30px;
  }
  .popupCloseBtn {
    color: #fff;
    &:hover {
      cursor: pointer;
      color: ${mainColor};
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    left: 0px;
    .title {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 7px;
      line-height: 1.3rem;
    }
  }
`;

//위치정보
export const PlaceLocationWrap = styled.div`
  width: 100%;
  /* height: 40px; */
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  div:first-child {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .locationIcon {
    font-size: 1.2rem;
  }
  .placeAddr {
    text-align: left;
    font-size: 0.9rem;
    margin: 2px 0 0 2px;
    line-height: 1rem;
  }

  @media (max-width: 500px) {
    .locationIcon {
      font-size: 0.9rem;
    }
    .placeAddr {
      font-size: 0.7rem;
      margin: 0 0 1px 2px;
    }
  }
`;

export const Modi_DelMenuWrap = styled.div`
  width: auto;
  position: relative;
  .menuBtn {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MenuInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: beige;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  p {
    font-size: 0.9rem;
    margin: 5px;
    &:hover {
      cursor: pointer;
      color: ${mainColor};
    }
  }
  .modifyBtn {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .deleteBtn {
    margin-top: 10px;
  }
`;

//별점
export const StarRateWrap = styled.div`
  width: ${InnerWidth};
  height: auto;
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: ${grayLine};
  font-size: 1rem;
  @media (max-width: 500px) {
    width: 85%; //80%
  }
`;

export const RateInner = styled.div`
  width: 50%;
  height: 30px;
  margin: 7px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    display: block;
    width: 30%;
    text-align: left;
    font-family: 'PreB';
  }
  .colorStar {
    color: ${mainColor};
    margin: 0 5px;
  }
  @media (max-width: 500px) {
    width: 100%;
    font-size: 0.85rem;
    margin: 5px 0;
  }
`;

//본문
export const MainTextWrap = styled.div`
  width: ${InnerWidth};
  line-height: 2rem;
  margin: 5px auto;
  padding: 5px;
  box-sizing: border-box;
  text-align: left;
  white-space: pre-wrap;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;

  @media (max-width: 500px) {
    width: 85%;
    font-size: 0.9rem;
  }
`;

export const MoreTextWrap = styled.div`
  width: 100%;
  margin: 10px 0 0;
  position: relative;
  button {
    width: auto;
    height: auto;
    font-size: 0.75rem;
    background-color: #fff;
    border: none;
    color: ${mainColor};
    padding: 2px;
    text-align: left;
    border-radius: 0;
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid ${mainColor};
    }
  }
`;

export const VisitedWrap = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 0.75rem;
  color: ${grayColor};
`;
