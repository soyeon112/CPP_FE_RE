import styled from 'styled-components';
import { mainColor } from '../../CommonStyled';

export const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* background-color: lavender; */
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 10px auto;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff9f8;
  text-align: center;

  img {
    /* width: 1200px; */
    width: 70%;
    @media (max-width: 1280px) {
      width: 80%;
    }
    @media (max-width: 820px) {
      width: 120%;
      /* margin-left: 30px; */
    }
    @media (max-width: 500px) {
    }
  }
`;

export const MapButton = styled.button`
  width: 200px;
  /* width: 100%; */
  height: 55px;
  /* height: 100%; */
  padding: 20px;
  box-sizing: border-box;
  margin: 20px auto;
  background-color: ${mainColor};
  color: #fff;
  font-size: 1rem;
  border: none;
  transition: all 0.5s;
  font-family: 'PreB';
  border-radius: 10px;
  line-height: 15px;
  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em lightgray;
    transform: translateY(-5px);
    cursor: pointer;
  }

  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 50px;
    font-size: 0.8rem;
    line-height: 10px;
    border-radius: 100px;
  }
`;

export const RecommendWrap = styled.div`
  width: 990px;
  height: 430px;
  margin: 80px auto 0 auto;
  padding: 0 50px;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 820px) {
    /* width: 100%; */
  }
  @media (max-width: 500px) {
  }
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
  color: ${mainColor};
`;
