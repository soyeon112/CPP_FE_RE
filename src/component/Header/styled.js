import styled from 'styled-components';

export const HeaderWrap = styled.div`
  /* background-color: lavender; */

  position: relative;
  width: 990px;
  height: 136px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    background-color: pink;
    width: 100%;
  }
  @media (max-width: 500px) {
    background-color: lavenderblush;
  }
`;

export const InnerLogoSection = styled.div`
  width: 50%; //70px
  height: 100%;
  margin: 0 auto;
  text-align: center;

  #logo {
    height: 80%;
    object-fit: contain;
    margin-top: 3%;
  }
`;
