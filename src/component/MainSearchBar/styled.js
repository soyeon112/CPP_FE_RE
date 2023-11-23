import styled from 'styled-components';
import { mainColor } from '../../CommonStyled';

export const SearchBarWrap = styled.div`
  position: relative;
  width: 50%; // 800px
  height: 50px;
  margin: 0 auto 20px auto;
`;

export const SearchBarItem = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: solid gray;
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
  /* display: flex; */
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 5px auto 0 auto;
  background-color: #fff;
  border-radius: 15px;
  font-size: 0.9rem;
  border: solid rgb(210, 210, 210);
  z-index: 3;
`;
export const ResultInner = styled.div`
  width: 50%;
  height: auto;
  margin: 5px;
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
  /* margin-bottom: 10px; */
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #eaeaea;
  list-style: none;

  /* background-color: pink; */
  &:hover {
    color: ${mainColor};
    font-family: 'PreB';
  }
`;

export const ResultAddr = styled.div`
  margin-left: 10px;
  color: gray;
  font-size: 0.75rem;
  line-height: 0.9rem;
`;
