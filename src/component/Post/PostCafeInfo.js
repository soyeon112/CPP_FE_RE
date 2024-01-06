import React, { useState } from 'react';
import {
  PlaceInfoWrap,
  PlaceInfo,
  PlaceInfoInnerL,
  PlaceInfoInnerR,
  InfoPopup,
  PlaceLocationWrap,
  Modi_DelMenuWrap,
  MenuInner,
} from './styled';

import { FaCircleInfo } from 'react-icons/fa6';
import { GrView } from 'react-icons/gr';
import { LuReceipt } from 'react-icons/lu';
import { IoReceiptOutline } from 'react-icons/io5';
import { IoReceiptSharp } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { BsBookmarkStar } from 'react-icons/bs';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';
import { CiMenuKebab } from 'react-icons/ci';

export default function PostCafeInfo({
  cafe,
  views,
  isSponsored,
  isLiked,
  isBookmarked,
}) {
  return (
    <PlaceInfoWrap>
      <PlaceInfo>
        <PlaceInfoInnerL>
          <p className="placeName">{cafe.name}</p>
          <InfoHover
            cafeName={cafe.name}
            cafeAddr={cafe.address}
            cafeTel={cafe.phone}
            cafeTime={cafe.openingHours}
          />
        </PlaceInfoInnerL>
        <PlaceInfoInnerR>
          <div className="viewWrap">
            <GrView className="viewIcon" />
            <p className="viewCount">{views}</p>
          </div>
          {/* 영수증 */}
          {isSponsored ? (
            <IoReceiptSharp className="IconItem" />
          ) : (
            <IoReceiptOutline className="IconItem" />
          )}
          {/* <LuReceipt className="receiptIcon" /> */}
          {/* 좋아요 */}
          {isLiked ? (
            <FaHeart className="IconItem" />
          ) : (
            <FaRegHeart className="IconItem" />
          )}

          {/* 북마크 */}
          {isBookmarked ? (
            <BsBookmarkStarFill className="IconItem" />
          ) : (
            <BsBookmarkStar className="IconItem" />
          )}
        </PlaceInfoInnerR>
      </PlaceInfo>

      <PlaceLocationWrap>
        <div>
          <MdOutlineLocationOn className="locationIcon" />
          <p className="placeAddr">{cafe.address}</p>
        </div>

        <MenuIcon />
      </PlaceLocationWrap>
    </PlaceInfoWrap>
  );
}

//info버튼 클릭시 보이는 팝업
function InfoHover(props) {
  const [isPopup, setIsPopup] = useState(false);
  const popupState = () => {
    setIsPopup(!isPopup);
    console.log(isPopup);
  };
  return (
    <>
      <FaCircleInfo className="infoIcon" onClick={popupState} />
      {isPopup && (
        <InfoPopup>
          <div>
            <p className="title">🏷️ Place Info</p>
            <IoIosClose className="popupCloseBtn" onClick={popupState} />
          </div>
          <div className="infoTexts">
            <p>🔖 - {props.cafeName}</p>
            <p>🏠 - {props.cafeAddr}</p>
            <p>📞 - {props.cafeTel}</p>
            <p>⏰ - {props.cafeTime}</p>
          </div>
        </InfoPopup>
      )}
    </>
  );
}

//메뉴버튼(수정/삭제)
function MenuIcon() {
  const [isMenu, setIsMenu] = useState(false);

  const ClickMenu = () => {
    setIsMenu(!isMenu);
    console.log(isMenu);
  };

  return (
    <Modi_DelMenuWrap>
      <CiMenuKebab className="menuBtn" onClick={ClickMenu} />
      {isMenu ? (
        <MenuInner onMouseLeave={() => setIsMenu(!isMenu)}>
          <p className="modifyBtn">수정</p>
          <p className="deleteBtn">삭제</p>
        </MenuInner>
      ) : null}
    </Modi_DelMenuWrap>
  );
}
