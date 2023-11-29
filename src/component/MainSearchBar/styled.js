import styled from 'styled-components';
import { mainColor, grayColor } from '../../CommonStyled';

export const SearchBarWrap = styled.div`
  position: relative;
  width: 50%; // 800px
  height: 50px;
  margin: 0 auto 10px auto;

  .searchIcon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 12px;
    right: 20px;
    color: ${grayColor};
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 500px) {
  }
`;

export const SearchBarItem = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${grayColor};
  border-width: 1px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 1rem;
  outline-color: ${mainColor};
`;

export const SearchBtn = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 12px;
  right: 20px;
`;

export const ResultWrap = styled.div`
  position: absolute;
  display: ${(props) => (props.$showResult ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  width: 100%; //80px
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 5px auto 0 auto;
  background-color: #fff;
  border-radius: 15px;
  font-size: 0.9rem;
  /* border: 1px solid rgb(210, 210, 210); */
  border: 1px solid ${grayColor};
  z-index: 3;

  @media (max-width: 500px) {
    height: auto;
    flex-direction: column;
  }
`;
export const ResultInner = styled.div`
  width: 50%;
  height: auto;
  padding: 5px;
  box-sizing: border-box;
  /* border: 1px solid blue; */

  @media (max-width: 500px) {
    width: 100%;
    margin: 10px 0;
  }
`;
export const ResultTitle = styled.p`
  font-size: 1rem;
  font-family: 'PreB';
  color: ${mainColor};
  padding-bottom: 10px;
  border-bottom: 2px solid #eaeaea;
`;

export const ResultList = styled.ul`
  width: 100%;
  height: auto;
`;
export const ResultListItem = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #eaeaea;
  list-style: none;
  span {
    display: block;
    width: 100%;
  }
  &:hover {
    color: ${mainColor};
    font-family: 'PreB';
  }
`;

export const ResultAddr = styled.div`
  width: 100%;
  color: ${grayColor};
  font-size: 0.75rem;
  line-height: 0.9rem;
  margin-top: 5px;
`;
