import React, { useState } from 'react';
import {
  ModalBg,
  ModalInner,
  InnerTop,
  InnerMiddle,
  InnerBottom,
  InputFormWrap,
  LoginBtn,
  JoinBtn,
} from './styled';
import { IoIosClose } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { authAction } from '../../store/auth';

function LoginModal({ closeLoginModal }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const dispatch = useDispatch();

  const LoginHandler = () => {
    dispatch(authAction.login());
  };

  //회원가입페이지 open
  const openJoin = () => {
    window.open('/join', '_blank');
    closeLoginModal(false);
  };

  return (
    <ModalBg>
      <ModalInner>
        <InnerTop>
          <IoIosClose
            className="loginModalClose"
            onClick={() => closeLoginModal(false)}
          />
          <p className="loginTitle">로그인</p>
        </InnerTop>
        <InnerMiddle>
          <InputFormWrap>
            <p>이메일</p>
            <input
              placeholder="id"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </InputFormWrap>
          <InputFormWrap>
            <p>비밀번호</p>
            <input
              placeholder="pw"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </InputFormWrap>
          <LoginBtn onClick={LoginHandler}>로그인</LoginBtn>
        </InnerMiddle>
        <InnerBottom>
          <p>아직 회원이 아니신가요?</p>
          <JoinBtn onClick={openJoin}>회원가입</JoinBtn>
        </InnerBottom>
      </ModalInner>
    </ModalBg>
  );
}

export default LoginModal;
