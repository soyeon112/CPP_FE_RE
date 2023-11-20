import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import './Posting.css';
import Modal from 'react-modal';
import PostingUpload from '../../component/Posting/UploadPhoto';
import DatePicker, { registerLocale } from 'react-datepicker';
import './DatePicker.css';
import StarReceiptSponser from '../../component/Posting/StarReceiptSponser';
import ko from 'date-fns/locale/ko';
import CafePopup from '../../component/Posting/CafeModal/CafePopup';
import styled from 'styled-components';
registerLocale('ko', ko);

function Posting({ location, history }) {
  //모달창 오픈,클로즈 여부
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //본문내용
  const [content, setContent] = useState('');
  // -----
  console.log('location', location);
  console.log('history', history);
  const [allState, setAllState] = useState({
    photoURLs: [],
    cafeId: '',
    visited: '',
    rate: {
      taste: 5,
      vibe: 5,
      service: 4,
      parking: 3,
      bathroom: 2,
      amenity: 5,
    },
    content: '',
    receiptURL: null,
    isSponsored: false,
  });

  //방문일 달력
  const [visitDate, setVisitDate] = useState('');
  //본문내용
  const [contentText, setContentText] = useState('');
  const initCafe = {
    address: [
      {
        id: null,
        name: null,
        address: null,
        postId: null,
      },
    ],
    name: [
      {
        id: null,
        name: null,
        address: null,
        postId: null,
      },
    ],
  };

  //search cafe
  //검색 데이터 저장 (axios로 받아온 데이터 저장)
  const [cafeInfo, setCafeInfo] = useState(initCafe);
  //input값
  const [keyword, setKeyword] = useState('');

  //검색창 데이터 get
  const GetCafeData = async () => {
    console.log('들어옴?');
    const res = await axios
      .get
      // `http://api.cpp.co.kr:3300/cafes/search?keyword=${keyword}`
      ();
    setCafeInfo(res.data);
    console.log('cafeInfo', cafeInfo);
  };

  useEffect(() => {
    GetCafeData();
  }, []);

  //input 키워드 변경
  const getKeyword = (e) => {
    setKeyword(e.target.value);
  };
  // useEffect(() => {
  //   setCafeInfo(keyword);
  // }, [keyword]);

  //포스팅 작성 완료 버튼
  const ClickPostingDone = async (e) => {
    if (contentText === '') {
      console.log('text없음');
      alert('본문이 입력되지 않았습니다. 글을 입력해주세요.');
    } else {
      console.log(allState);
      // setAllState({
      //   ...allState,
      //   content: contentText,
      // });
      console.log('State content : ', allState.content);
      console.log('텍스트 있음');

      try {
        const response = await axios.post(
          // 'http://api.cpp.co.kr:3300/posts',
          {
            ...allState,
            content: contentText,
          },
          { withCredentials: true }
        );
        console.log(response.data.id);
        alert('작성 성공');
        // window.location.href = '/';
        //id값을 사용해서 해당 포스트 상세보기 페이지로 전환
      } catch (err) {
        console.log(err);
      }
    }
  };

  //카페명 검색결과 창
  const [showCafeRe, setShowCafeRe] = useState(false);
  //리스트중에서 선택된 카페명 저장
  const [selectCafe, setSelectCafe] = useState();

  //카페명 검색 결과 오픈
  const cafeNameRe = () => {
    setShowCafeRe(true);
  };

  //카페명 검색창 인풋 ref
  const cafenameRef = useRef();

  //모달창에서 리스트 요소(카페목록) 클릭시 selectCafe state 변경해주기
  //위한 함수
  const changeSelectCafe = (cafe) => {
    console.log('cafe', cafe);
    setSelectCafe(cafe);
    cafenameRef.current.value = cafe.name;
    setModalIsOpen(false);
  };
  console.log('cafeInfo', cafeInfo);

  function selectDate(date) {
    // console.log('date', data);
    // console.log(typeof data);
    console.log(date.toISOString().slice(0, 10));
    const day = date.toISOString().slice(0, 10);
    console.log('day', day);
    setVisitDate(date);
    setAllState({
      ...allState,
      visited: day,
    });
  }

  //선택한 날짜 저장 state
  function selectDate(date) {
    // console.log('date', data);
    // console.log(typeof data);
    console.log(date.toISOString().slice(0, 10));
    const day = date.toISOString().slice(0, 10);
    console.log('day', day);
    setVisitDate(date);
    setAllState({
      ...allState,
      visited: day,
    });
  }
  return (
    <div className="postingContainer">
      <PostingUpload setAllState={setAllState} allState={allState} />
      <div className="selectAll">
        <form>
          <input
            ref={cafenameRef}
            id="placeName"
            name="keyword"
            type="text"
            placeholder="매장명"
            onKeyUp={(e) => {
              cafeNameRe();
            }}
            onChange={getKeyword}
          />
          {showCafeRe ? (
            <div
              className="cafeSearchResult"
              onBlur={(e) => {
                setShowCafeRe(false); //결과창 hide
              }}
            >
              <ul>
                {/* <li className="noResultItem">검색결과가 없습니다.</li> */}
                {console.log('cafe name: ')}
                {cafeInfo.name
                  .filter((store) => store.name.includes(keyword))
                  .map((it) => (
                    <li
                      key={it.id}
                      className="cafeSearchResultItem"
                      onClick={(e) => {
                        setSelectCafe(it);
                        setShowCafeRe(false);
                        cafenameRef.current.value = it.name;
                        // 카페id state관리
                        setAllState({
                          ...allState,
                          cafeId: it.id,
                        });
                      }}
                    >
                      {it.name}
                    </li>
                  ))}
              </ul>
            </div>
          ) : null}
        </form>

        {/* 선택된 매장명에 따라 주소 변경됨 */}
        {selectCafe !== undefined ? (
          <input
            id="placeAddress"
            type="text"
            placeholder="매장위치"
            value={selectCafe.address}
            onChange={getKeyword}
          />
        ) : (
          <input
            id="placeAddress"
            type="text"
            placeholder="매장위치"
            // value={keyword.address}
            onChange={getKeyword}
          />
        )}
        <DatePicker
          id="visitDate"
          placeholderText="방문일"
          dateFormat="yyyy-MM-dd"
          selected={visitDate}
          locale="ko"
          onChange={selectDate}
        />
        {console.log('data:', visitDate)}
      </div>

      {/* //현준 start*/}
      <button onClick={() => setModalIsOpen(true)}>등록버튼</button>
      {/* 카카오 장소 검색 api를 사용한 카페 검색 api */}
      <CafeSearchModal isOpen={modalIsOpen}>
        <ModalInner>
          <CafePopup onClickCafe={changeSelectCafe} />
          <button
            className="modalCloseBtn"
            onClick={() => setModalIsOpen(false)}
          >
            x
          </button>
        </ModalInner>
      </CafeSearchModal>
      {/* 현준 end */}
      <div className="postingbar"></div>

      {/* 별점, 영수증, 협찬 버튼 컴포넌트 */}
      <StarReceiptSponser setAllState={setAllState} allState={allState} />

      <div className="Posting">
        <textarea
          // ref={textRef}
          value={contentText}
          onChange={(e) => setContentText(e.target.value)}
          // onInput={handleResizeHeight}
          placeholder="소개하는 글을 작성해보세요 :p"
        />
      </div>
      <button id="uploadBtn" onClick={ClickPostingDone}>
        완료
      </button>
    </div>
  );
}

//모달창 style
const CafeSearchModal = styled(Modal)`
  background-color: pink;
  position: absolute;
  inset: 40px;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
`;

const ModalInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* 카페 등록 모달창 닫기 버튼 */
  .modalCloseBtn {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #fff;
    /* border: solid 1px lightgray; */
  }
  .modalCloseBtn:hover {
    cursor: pointer;
    border: solid 1px #fc5230;
    color: #fc5230;
  }
`;

export default Posting;
