import styled from 'styled-components';

export const MainWrap = styled.div`
  /* width: 990px; */
  height: 100%;
  margin: 0 auto;
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 20 auto;
  overflow: hidden;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  position: relative;
  background-color: #fff9f8;
`;

export const MapButton = styled.button`
  width: 200px;
  height: 55px;
  margin: 20px auto;
  background-color: #fc5230;
  color: #fff;
  font-size: 1rem;
  border: none;
`;

export const RecommendWrap = styled.div`
  width: 990px;
  height: 430px;
  margin: 80px auto 0 auto;
`;

export const RecommendInner = styled.div`
  padding-top: 8px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
export const RecommendDiv = styled(RecommendInner)`
  margin: 20px 0;
  height: 90%;
`;

export const InnerTitle = styled.p`
  font-family: 'PreB';
  font-size: 1.2rem;
  color: #fc5230;
`;
