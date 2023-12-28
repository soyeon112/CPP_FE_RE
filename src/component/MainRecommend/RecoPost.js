import React from 'react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import PostForm from './PostForm';
import dummy from '../../storeDummy.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

//component - 메인 오늘의 추천 카페 영역

const RecommendItemWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;

function RecoPost() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        //반응형 옵션
        breakpoint: 1024, //화면사이즈
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const initOtherPost = {
    id: null, //post
    cafeId: null,
    userId: null,
    nickname: null,
    profileURL: null,
    photoURL: null,
  };
  const [recoPost, setRecoPost] = useState(initOtherPost);

  console.log(recoPost);
  useEffect(() => {
    setRecoPost(dummy);
  }, []);
  return (
    <RecommendItemWrap>
      {recoPost.cafeId !== null ? (
        <Slider {...settings}>
          {Object.values(recoPost).map((it) => (
            <PostForm
              key={it.id}
              postId={it.id}
              photoURL={it.photoURLs[0]}
              nickname={it.user.nickname}
              profileURL={it.user.profileURL}
            />
          ))}
        </Slider>
      ) : null}
    </RecommendItemWrap>
  );
}

export default RecoPost;
