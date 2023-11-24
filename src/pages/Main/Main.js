import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../component/MainSearchBar/SearchBar';
import RecoPost from '../../component/MainRecommend/RecoPost';
import {
  MainWrap,
  BannerWrap,
  MapButton,
  RecommendWrap,
  RecommendInner,
  RecommendDiv,
  InnerTitle,
} from './styled';

//page - 메인

function Main() {
  return (
    <MainWrap>
      <SearchBar placeholder={'지역 / 공간 이름을 입력해주세요.'} />
      <BannerWrap>
        <img src={`${process.env.PUBLIC_URL}/image/cpp-banner2.png`} />
        <Link to="/map">
          <MapButton>내 주변 카페 찾아보기</MapButton>
        </Link>
      </BannerWrap>
      <RecommendWrap>
        <RecommendInner>
          <InnerTitle>TODAY C:P:P PICK ♥</InnerTitle>
          <RecommendDiv>
            <RecoPost />
          </RecommendDiv>
        </RecommendInner>
      </RecommendWrap>
    </MainWrap>
  );
}
export default Main;
