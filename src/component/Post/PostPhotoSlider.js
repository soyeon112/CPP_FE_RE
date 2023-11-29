import React, { useState } from 'react';

import { SliderWrap, SliderArrowWrap, UserInfoWrap } from './styled';
export default function PostPhotoSlider({ user, photoURLs }) {
  const [countImg, setCountImg] = useState(0);

  //이전 버튼(img)
  const ArrowLeft = () => {
    if (countImg !== 0) {
      setCountImg(countImg - 1);
    }
  };
  //다음 버튼(img)
  const ArrowRight = () => {
    if (countImg !== photoURLs.length - 1) {
      setCountImg(countImg + 1);
    }
  };

  return (
    <SliderWrap>
      <SliderArrowWrap>
        {countImg !== 0 ? (
          <img
            className="arrowBtn"
            name="arrowLeft"
            onClick={ArrowLeft}
            src={`${process.env.PUBLIC_URL}/image/arrow-left-icon.png`}
            alt="left"
          />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/image/transparent-icon.png`}
            alt="left"
          />
        )}

        {countImg !== photoURLs.length - 1 ? (
          <img
            className="arrowBtn"
            name="arrowRight"
            onClick={ArrowRight}
            src={`${process.env.PUBLIC_URL}/image/arrow-right-icon.png`}
            alt="left"
          />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/image/transparent-icon.png`}
            alt="left"
          />
        )}
      </SliderArrowWrap>

      <img className="sliderImgs" src={photoURLs[countImg]} alt="공간이미지" />

      <UserInfo username={user.nickname} />
    </SliderWrap>
  );
}

//유저 정보
function UserInfo({ username }) {
  return (
    <UserInfoWrap>
      <img
        src={`${process.env.PUBLIC_URL}/image/user-icon.png`}
        width="20px"
        height="20px"
        alt="left"
      />
      <p className="nickname">{username}</p>
    </UserInfoWrap>
  );
}
