import styled from 'styled-components';
import { mainColor, grayColor } from '../../CommonStyled';

export const ModalBg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
`;
export const ModalInner = styled.div`
  position: relative;
  width: 560px;
  height: 468px;
  background: #fcfcfc;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 64px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 150px auto 0 auto;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 90%;
    height: 60%;
  }
`;
export const InnerTop = styled.div`
  width: 100%;
  height: 20%;
  position: relative;

  .loginTitle {
    text-align: center;
    font-size: 1.8rem;
    font-family: 'PreB';
    margin-top: 30px;
    color: ${mainColor};
  }
  .loginModalClose {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 2.5rem;

    &:hover {
      cursor: pointer;
      color: ${mainColor};
    }
  }

  @media (max-width: 500px) {
    .loginTitle {
      font-size: 1.6rem;
      margin-top: 10px;
    }
    .loginModalClose {
      font-size: 2rem;
    }
  }
`;
export const InnerMiddle = styled.div`
  width: 100%;
  height: 50%;
  /* padding: 30px 0; */
  box-sizing: border-box;
  text-align: center;
  margin-top: 25px;

  @media (max-width: 500px) {
    height: 55%;
    margin-top: 0;
  }
`;

export const InputFormWrap = styled.div`
  width: 380px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px auto 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 40%;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 30px;
  }

  input {
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    background: rgba(255, 122, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 1rem;
    padding-left: 10px;
    outline-color: ${mainColor};

    @media (max-width: 500px) {
      margin: 0 auto;
      width: 100%;
    }
    &::placeholder {
      font-size: 0.9rem;
      color: ${grayColor};
    }
  }
`;

export const InnerBottom = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;

  p {
    margin-top: 15px;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const LoginBtn = styled.button`
  width: 120px;
  height: 31px;
  background: rgba(255, 122, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.9rem;
  margin-top: 30px;
  outline-color: ${mainColor};
  color: #000;
  &:hover {
    cursor: pointer;
    color: ${mainColor};
    border: 1.5px solid ${mainColor};
  }

  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const JoinBtn = styled.button`
  margin: 10px auto;
  font-size: 0.9rem;
  color: ${mainColor};
  background-color: #fff;
  border: none;
  border-radius: 0px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${mainColor};
  }
`;
