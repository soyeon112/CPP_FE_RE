import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  position: relative;
  width: 100%;
  height: 85px;
  /* transform: translateY(-100%); */
  text-align: center;
  margin-top: 100px;
  padding-top: 20px;
  background-color: rgb(243, 243, 243);

  p {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #808080;
  }
`;
function Footer() {
  return (
    <FooterWrap>
      <p>© 2022 RUPINGPONG</p>
      <p>구현준 김소연 김익수 류승연</p>
    </FooterWrap>
  );
}

export default Footer;
