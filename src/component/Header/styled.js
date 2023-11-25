import styled from 'styled-components';

export const HeaderWrap = styled.div`
  position: relative;
  width: 990px;
  height: 120px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1280px) {
    width: 100%;
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 80px;
  }
  @media (max-width: 500px) {
  }
`;

export const InnerLogoSection = styled.div`
  width: 100%; //70px
  height: 100%;
  margin: 0 auto;
  text-align: center;

  #logo {
    height: 80%;
    object-fit: contain;
    margin-top: 1.5%;
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    margin: 0 20px;
    text-align: left;

    #logo {
      height: 95%;
      margin-top: 0%;
    }
  }
  @media (max-width: 500px) {
  }
`;
