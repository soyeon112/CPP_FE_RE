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
  top: 0;
  right: 0;
  width: 20%;

  #navUl {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;
  }

  .navLi {
    margin-left: 25px;
    font-size: 0.9rem;

    &:hover {
      color: ${mainColor};
      cursor: pointer;
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
