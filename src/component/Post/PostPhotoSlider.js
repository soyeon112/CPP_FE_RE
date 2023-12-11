import React, { useState } from 'react';

import { SliderWrap, UserInfoWrap, ImageWrap } from './styled';
import { FaUser } from 'react-icons/fa6';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PostPhotoSlider({ user, photoURLs }) {
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
      <FaUser className="userIcon" />
      <p className="nickname">{username}</p>
    </UserInfoWrap>
  );
}
