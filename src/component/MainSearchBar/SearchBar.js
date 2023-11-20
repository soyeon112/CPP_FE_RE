import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import '../../pages/Main/Main.css';
import axios from 'axios';
import DummyData from './storeList.json';
import {
  SearchBarWrap,
  SearchBarItem,
  SearchBtn,
  ResultWrap,
  ResultInner,
  ResultTitle,
  ResultList,
  ResultListItem,
  ResultAddr,
} from './styled';

//component - 메인 상단 검색창

function SearchBar({ placeholder }) {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState(false);
  const changeText = (e) => {
    setSearch(e.target.value);
    // GetSearch();
  };

  /* 11.19 주석처리
  const initDataSearch = {
    name: [
      {
        id: null,
        name: null,
        address: null,
        postId: null,
      },
    ],
    address: [
      {
        id: null,
        name: null,
        address: null,
        postId: null,
      },
    ],
  };
*/
  axios.defaults.withCredentials = true;
  // const [getSearch, setGetSearch] = useState(initDataSearch);
  //11.19 코드 변경
  const [getSearch, setGetSearch] = useState();

  /* 11.19 주석처리
  const GetSearch = async () => {
    console.log('search : ', search);
    const res = await axios.get(
      `http://api.cpp.co.kr:3300/cafes/search?keyword=${search}`
    );
    setGetSearch(res.data);
    console.log('getSearch1 : ', getSearch);
  };

  useEffect(() => {
    GetSearch();
  }, []);
*/

  //11.19 추가 더미데이터
  useEffect(() => {
    setGetSearch(DummyData);
  }, []);

  // const onEnter = (e) => {
  //   if (e.key === 'Enter') {
  //     GetSearch(); //엔터 클릭하면 axios실행
  //     console.log('enter click');
  //   }
  // };
  return (
    <SearchBarWrap>
      <SearchBarItem
        name="search"
        type="text"
        placeholder={placeholder}
        value={search}
        onKeyUp={(e) => {
          {
            setShowResult(true);
          }
        }}
        onChange={changeText}
        // onKeyPress={onEnter} //enter key
      />
      <SearchBtn
        src={`${process.env.PUBLIC_URL}/image/search-icon.png`}
        alt="검색아이콘"
      />

      {/* 검색창 클릭시 검색결과 리스트 출력 */}
      {showResult ? (
        <ResultWrap $showResult onMouseLeave={() => setShowResult(false)}>
          <ResultInner>
            <ResultTitle>카페별</ResultTitle>
            <ResultList>
              {getSearch
                .filter((info) => info.storeInfo.name.includes(search))
                .map((info, key) => (
                  <Link to={`/post/${info.storeInfo.postId}`}>
                    <ResultListItem key={info.storeInfo.id}>
                      {info.storeInfo.name}
                      <ResultAddr>{info.storeInfo.address}</ResultAddr>
                    </ResultListItem>
                  </Link>
                ))}
            </ResultList>
          </ResultInner>

          <ResultInner>
            <ResultTitle>지역별</ResultTitle>
            <ResultList>
              {getSearch
                .filter((info) => info.storeInfo.address.includes(search))
                .map((info, key) => (
                  <Link to={`/post/${info.storeInfo.postId}`}>
                    <ResultListItem key={info.storeInfo.id}>
                      {info.storeInfo.name}
                      <ResultAddr>{info.storeInfo.address}</ResultAddr>
                    </ResultListItem>
                  </Link>
                ))}
            </ResultList>
          </ResultInner>
        </ResultWrap>
      ) : null}
    </SearchBarWrap>
  );
}

export default SearchBar;
