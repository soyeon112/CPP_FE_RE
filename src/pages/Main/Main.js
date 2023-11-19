import Reacet from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../component/MainSearchBar/SearchBar';
import RecoPost from '../../component/Main/RecoPost';
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
      <SearchBar
        placeholder={'지역 / 공간 이름을 입력해주세요.'} /*data = {Store}*/
      />
      <BannerWrap>
        <img
          src={`${process.env.PUBLIC_URL}/image/cpp-banner2.png`}
          width="1200px"
        />
        <Link to="/map">
          {/* <img
            className="mainBannerBtn"
            src={`${process.env.PUBLIC_URL}/image/main-banner-btn.png`}
          /> */}
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
