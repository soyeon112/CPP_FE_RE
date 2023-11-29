import styled from 'styled-components';
import { mainColor, LinkStyle, grayColor } from '../../CommonStyled';

export const InnerWidth = '480px';
export const borderBottom = '1px solid #f0f0f0';
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
  overflow: hidden;
  width: 100%;
  .sliderImgs {
    display: inline-block;
    height: 640px;
    border-radius: 10px;
    /* border: 1px solid rgb(234, 234, 234); */
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 0 20px 25px;
    box-sizing: border-box;
    margin: 0 auto;
    .sliderImgs {
      width: 90%;
      height: auto;
      object-fit: contain;
    }
  }
`;
export const SliderArrowWrap = styled.div`
  width: 550px;
  position: absolute;
  /* top: 300px; */
  top: 50%;
  left: 50px;
  display: flex;
  justify-content: space-between;

  img {
    width: 25px;
    height: 25px;
    &:hover {
      cursor: ${(props) => (props.onClick ? 'pointer' : '')};
    }
  }

  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    width: 95%;
    top: 50%;
    left: 1%;
    padding: 0 5px;
  }
`;

export const UserInfoWrap = styled.div`
  position: absolute;
  left: 90px;
  bottom: 15px;
  display: flex;
  width: auto; //130px
  height: 22px;
  padding: 2px 40px; //2px 15px 0 15px
  border-radius: 30px;
  border: none;
  background-color: #f0f0f0;
  img {
    position: absolute;
    left: 15px;
  }
  .nickname {
    font-size: 0.9rem;
    margin: 4px 0 0 20px;
  }
  @media (max-width: 500px) {
    left: 10%; //40px
    border-radius: 10px;
    /* bottom:70px; */
  }
`;

// 카페 정보 및 각종 버튼
export const PlaceInfoWrap = styled.div`
  width: 480px;
  margin: 10px auto 0;
  /* border: 1px solid blueviolet; */
  padding: 5px;
  box-sizing: border-box;
  border-bottom: ${borderBottom};

  @media (max-width: 500px) {
    width: 80%;
    margin: 0 auto;
  }
`;
export const PlaceInfo = styled.div`
  width: 100%;
  /* padding: 10px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const PlaceInfoInnerL = styled.div`
  height: 30px;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .placeName {
    width: auto;
    text-align: left;
    font-family: 'PreB';
    font-size: 1.3rem;
    color: ${mainColor};
  }
  .infoIcon {
    font-size: 1rem;
    margin-left: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    .placeName {
      font-size: 1.1rem;
    }
    .infoIcon {
      font-size: 0.9rem;
      margin-top: 2px;
    }
  }
`;
export const PlaceInfoInnerR = styled.div`
  width: 35%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .vieweWrap,
  .receiptIcon,
  .likeIcon,
  .bookmarkIcon {
    /* width: 30px;
    height: 80%; */
    font-size: 1.4rem;
    margin-top: 3px;
    &:hover {
      cursor: ${(props) => (props.onClick ? 'pointer' : '')};
    }
  }
  .viewCount {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    width: 40%;

    .vieweWrap,
    .receiptIcon,
    .likeIcon,
    .bookmarkIcon {
      font-size: 1rem;
    }
    .viewCount {
      font-size: 0.6rem;
    }
  }
`;

export const InfoPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
    top: 0;
    left: 0;

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
  height: 40px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .locationIcon {
    font-size: 1.2rem;
  }
  .placeAddr {
    text-align: left;
    font-size: 0.9rem;
    margin-left: 2px;
    line-height: 1rem;
  }

  @media (max-width: 500px) {
    .locationIcon {
      font-size: 1rem;
    }
    .placeAddr {
      font-size: 0.7rem;
    }
  }
`;

export const Modi_DelMenuWrap = styled.div`
  width: auto;
  position: relative;
  /* background-color: pink; */

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
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: beige;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  p {
    font-size: 1rem;
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
  border-bottom: ${borderBottom};
  font-size: 1rem;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const RateInner = styled.div`
  width: 50%;
  height: 30px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    display: block;
    width: 30%;
    text-align: left;
  }
  .colorStar {
    color: ${mainColor};
    margin: 0 5px;
  }
  @media (max-width: 500px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

//본문
export const MainTextWrap = styled.div`
  width: ${InnerWidth};
  line-height: 2rem;
  margin: 0 auto;
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
    width: 80%;
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
    font-size: 1rem;
    background-color: #fff;
    border: none;
    color: ${mainColor};
    padding: 2px;
    text-align: left;
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
