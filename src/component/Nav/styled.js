import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainColor, LinkStyle } from '../../CommonStyled';

export const LinkHover = styled(LinkStyle)`
  &:hover {
    color: ${mainColor};
  }
`;

export const HeaderNav = styled.div`
  position: absolute;
  /* top: 55px;
  right: 30px; */
  top: 0;
  right: 0;
  width: 20%;
  /* background-color: pink; */

  #navUl {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .navLi {
    margin-left: 25px;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
      color: ${mainColor};
    }

    @media (max-width: 1280px) {
    }
    @media (max-width: 820px) {
    }
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
`;
