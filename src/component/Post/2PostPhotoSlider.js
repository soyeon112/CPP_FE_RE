import React, { useState } from 'react';

import { SliderWrap, SliderArrowWrap, UserInfoWrap, ImageWrap } from './styled';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PostPhotoSlider({ user, photoURLs }) {
  console.log('2post', photoURLs);
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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <SliderWrap>
      <Slider {...settings}>
        {Object.values(photoURLs).map((it) => (
          <ImageWrap>
            <img className="sliderImgs" src={it} alt="공간이미지" />
          </ImageWrap>
        ))}
      </Slider>
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
