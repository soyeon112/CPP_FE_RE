import React from 'react';

export default function PostStarRate() {
  const colorStarIcon = `star-icon-color.png`;
  const starIcon = `star-icon-gray2.png`;
  let starArr = [];
  for (let i = 0; i < props.rate; i++) {
    starArr.push(
      <img
        src={`${process.env.PUBLIC_URL}/image/${colorStarIcon}`}
        width="15px"
        height="15px"
        alt="left"
      />
    );
  }
  if (props.rate < 5) {
    let rateResult = 5 - props.rate;
    for (let i = 0; i < rateResult; i++) {
      starArr.push(
        <img
          src={`${process.env.PUBLIC_URL}/image/${starIcon}`}
          width="15px"
          height="15px"
          alt="left"
        />
      );
    }
  }
  return (
    <>
      <div className="starItem">
        <p>{props.title}</p>
        <div className="starSet">{starArr}</div>
      </div>
    </>
  );
}
