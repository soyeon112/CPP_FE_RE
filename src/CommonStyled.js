import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const mainColor = '#fc5230';

export const LinkStyle = styled(Link)`
  color: #000;
  text-decoration: none;
`;
export const grayLine = '1px solid #f0f0f0';
export const grayColor = ' #aaaaaa';

export const lightGrayColor = '#F2F2F2';

export const MainColorBorderBtn = styled.button`
  border: 1px solid ${mainColor};
  background-color: #fff;
  color: ${mainColor};
  border-radius: 10px;

  &:hover {
    background-color: ${mainColor};
    color: #fff;
    cursor: pointer;
  }
`;
