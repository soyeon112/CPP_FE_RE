import React, { useState, useEffect } from 'react';
import dummy from '../../storeDummy.json';
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
import { IoMdSearch } from 'react-icons/io';

//component - 메인 상단 검색창

function SearchBar({ placeholder }) {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState(false);
  const changeText = (e) => {
    setSearch(e.target.value);
  };

  const [getSearch, setGetSearch] = useState();

  useEffect(() => {
    setGetSearch(dummy);
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
            e.preventDefault();
            setShowResult(true);
          }
        }}
        onChange={changeText}
      />

      <IoMdSearch className="searchIcon" />
      {/* 검색창 클릭시 검색결과 리스트 출력 */}
      {showResult ? (
        <ResultWrap $showResult onMouseLeave={() => setShowResult(false)}>
          <ResultInner>
            <ResultTitle>카페별</ResultTitle>
            <ResultList>
              {getSearch
                .filter((info) => info.cafe.name.includes(search))
                .map((info, key) => (
                  <LinkStyle to={`/post/${info.id}`}>
                    <ResultListItem key={info.id}>
                      <span>{info.cafe.name}</span>
                      <ResultAddr>{info.cafe.address}</ResultAddr>
                    </ResultListItem>
                  </LinkStyle>
                ))}
            </ResultList>
          </ResultInner>

          <ResultInner>
            <ResultTitle>지역별</ResultTitle>
            <ResultList>
              {getSearch
                .filter((info) => info.cafe.address.includes(search))
                .map((info, key) => (
                  <LinkStyle to={`/post/${info.id}`}>
                    <ResultListItem key={info.id}>
                      <span> {info.cafe.name}</span>
                      <ResultAddr>{info.cafe.address}</ResultAddr>
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
