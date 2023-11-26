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

import { LinkStyle } from '../../CommonStyled';
//component - 메인 상단 검색창

function SearchBar({ placeholder }) {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState(false);
  const changeText = (e) => {
    setSearch(e.target.value);
  };

  const [getSearch, setGetSearch] = useState();

  useEffect(() => {
    setGetSearch(DummyData);
  }, []);

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
                  <LinkStyle to={`/post/${info.storeInfo.postId}`}>
                    <ResultListItem key={info.storeInfo.id}>
                      {info.storeInfo.name}
                      <ResultAddr>{info.storeInfo.address}</ResultAddr>
                    </ResultListItem>
                  </LinkStyle>
                ))}
            </ResultList>
          </ResultInner>

          <ResultInner>
            <ResultTitle>지역별</ResultTitle>
            <ResultList>
              {getSearch
                .filter((info) => info.storeInfo.address.includes(search))
                .map((info, key) => (
                  <LinkStyle to={`/post/${info.storeInfo.postId}`}>
                    <ResultListItem key={info.storeInfo.id}>
                      {info.storeInfo.name}
                      <ResultAddr>{info.storeInfo.address}</ResultAddr>
                    </ResultListItem>
                  </LinkStyle>
                ))}
            </ResultList>
          </ResultInner>
        </ResultWrap>
      ) : null}
    </SearchBarWrap>
  );
}

export default SearchBar;
