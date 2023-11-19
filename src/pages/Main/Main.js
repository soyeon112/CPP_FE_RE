import Reacet from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../component/Main/SearchBar';
import RecoPost from '../../component/Main/RecoPost';
import styled from 'styled-components';

//page - 메인

const MainWrap = styled.div`
  /* width: 990px; */
  height: 100%;
  margin: 0 auto;
`;

const BannerWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;

const MapButton = styled.button`
  width: 200px;
  height: 55px;
  margin: 20px auto;
  background-color: #fc5230;
  color: #fff;
  font-size: 1rem;
  border: none;
`;
function Main() {
  return (
    <MainWrap>
      <SearchBar
        placeholder={'지역 / 공간 이름을 입력해주세요.'} /*data = {Store}*/
      />
      <BannerWrap className="mainBanner">
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
const RecommendWrap = styled.div`
  width: 990px;
  height: 430px;
  margin: 80px auto 0 auto;
`;

const RecommendInner = styled.div`
  padding-top: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const RecommendDiv = styled(RecommendInner)`
  margin: 20px 0;
  height: 90%;
`;

const InnerTitle = styled.p`
  font-family: 'PreB';
  font-size: 1.2rem;
  color: #fc5230;
`;
export default Main;
