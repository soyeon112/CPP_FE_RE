import styled from 'styled-components';
import { mainColor } from '../../CommonStyled';

const ModalWrap = styled.div``;

export const ModalBg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalInner = styled.div`
  /* position: relative; */

  width: 560px;
  height: 468px;
  background: #fcfcfc;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 64px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* margin: 240px auto 0 auto; */
  margin: 150px auto 0 auto;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-sizing: border-box;

  @media (max-width: 1280px) {
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;
export const InnerTop = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: lavender; */
  position: relative;

  #modalCloseBtn {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    right: 8px;
    &:hover {
      cursor: pointer;
    }
  }
  #title {
    text-align: center;
    font-size: 1.5rem;
    font-family: 'PreB';
    margin-top: 20px;
  }
`;
export const InnerMiddle = styled.div`
  width: 100%;
  height: 60%;
  padding: 50px 0;
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 500px) {
    height: 60%;
    padding: 25px 0;
  }
`;
export const InnerBottom = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  margin-top: 15px;
`;
export const InputFormWrap = styled.div`
  width: 380px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    height: auto;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 30px;
  }

  input {
    width: 80%;
    height: 31px;
    box-sizing: border-box;
    background: rgba(255, 122, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 1rem;
    padding-left: 10px;
    outline-color: ${mainColor};

    @media (max-width: 500px) {
      margin: 0 auto;
    }
  }
  input::placeholder {
    font-size: 0.9rem;
  }
`;
export const Button = styled.button`
  background: rgba(255, 122, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 120px;
  height: 31px;
  margin: 30px auto 0 auto;
  font-weight: 500;
  font-size: 0.9rem;
  color: #686868;
  outline-color: ${mainColor};

  &:hover {
    cursor: pointer;
    color: ${mainColor};
    border: 1.5px solid ${mainColor};
  }
`;

export const JoinBtn = styled(Button)`
  margin: 10px auto;
  color: ${mainColor};
  /* border: 1px solid ${mainColor}; */
`;
