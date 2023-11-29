import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { StarRateWrap, RateInner } from './styled';
export default function PostStarRate({ rate }) {
  console.log(rate);

  const Rate = (cate) => {
    const result = [];

    for (let a = 0; a < rate[cate]; a++) {
      result.push(<FaStar className="colorStar" />);
    }

    switch (cate) {
      case 'taste':
        cate = '맛';
        break;
      case 'vibe':
        cate = '분위기';
        break;
      case 'service':
        cate = '서비스';
        break;
      case 'parking':
        cate = '주차';
        break;
      case 'bathroom':
        cate = '화장실';
        break;
      case 'amenity':
        cate = '편의시설';
        break;
    }

    return (
      <RateInner>
        <span>{cate}</span>
        <div>{result}</div>
      </RateInner>
    );
  };

  const cateArr = [
    'taste',
    'vibe',
    'service',
    'parking',
    'bathroom',
    'amenity',
  ];
  return (
    <StarRateWrap>
      {cateArr.map((cate) => {
        return Rate(cate);
      })}
    </StarRateWrap>
  );
}
