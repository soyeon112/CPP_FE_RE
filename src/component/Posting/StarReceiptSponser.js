import React, { useState } from 'react';
import ReceiptSponser from './ReceiptSponser';
import '../../pages/Post/Posting.css';
import StarRating from './StarRating';

//conponent - 별점, 영수증, 협찬 여부 컴포넌트
function StarReceiptSponser({ setAllState, allState }) {
  /*별 점수 상태관리*/
  const [rateTaste, setRateTaste] = useState(''); //맛
  const [rateVibe, setRateVibe] = useState(''); //분위기
  const [rateService, setRateService] = useState(''); //서비스
  const [rateParking, setRateParking] = useState(''); //주차
  const [rateBathroom, setRateBathroom] = useState(''); //화장실
  const [rateAmenity, setRateAmenity] = useState(''); //편의시설

  return (
    <>
      {' '}
      <div className="postingReview">
        <p>별점을 매겨서 정보를 공유하세요!</p>
        {/* 영수증, 협찬 버튼 */}
        <ReceiptSponser setAllState={setAllState} allState={allState} />
      </div>
      <div className="postingStarContainer">
        <div className="postingStar">
          <StarRating
            title="맛"
            setAllState={setAllState}
            allState={allState}
          />
          <StarRating title="분위기" />
          <StarRating
            title="서비스"
            setRate={setRateService}
            rate={rateService}
          />
          <StarRating
            title="주차"
            setRate={setRateParking}
            rate={rateParking}
          />
          <StarRating
            title="편의시설"
            setRate={setRateBathroom}
            rate={rateBathroom}
          />
          <StarRating
            title="화장실"
            setRate={setRateAmenity}
            rate={rateAmenity}
          />
        </div>
      </div>
    </>
  );
}
export default StarReceiptSponser;
