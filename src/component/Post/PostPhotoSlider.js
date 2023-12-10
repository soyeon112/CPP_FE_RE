import React, { useState } from 'react';

import { SliderWrap, SliderArrowWrap, UserInfoWrap } from './styled';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

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
          <IoIosArrowBack className="arrowBtn" onClick={() => ArrowLeft()} />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/image/transparent-icon.png`}
            alt="left"
          />
        )}

        {countImg !== photoURLs.length - 1 ? (
          <IoIosArrowForward
            className="arrowBtn"
            onClick={() => ArrowRight()}
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
