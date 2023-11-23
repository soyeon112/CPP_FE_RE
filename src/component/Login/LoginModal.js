import React, { useState } from 'react';
import {
  ModalBg,
  ModalInner,
  InnerTop,
  InnerMiddle,
  InnerBottom,
  InputFormWrap,
  Button,
  JoinBtn,
} from './styled';
import { useDispatch } from 'react-redux';
import { authAction } from '../../Store/auth';

function LoginModal({ closeLoginModal }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const dispatch = useDispatch();

  const LoginHandler = () => {
    dispatch(authAction.login());
  };

  //login axios
  // const loginBtn = () => {
  //   axios({
  //     method: 'post',
  //     // url: 'http://api.cpp.co.kr:3300/auth/login',
  //     data: {
  //       email: loginEmail,
  //       password: loginPassword,
  //     },
  //     withCredentials: true,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.status);
  //       if (res.status === 200) {
  //         console.log('로그인 성공');
  //         sessionStorage.setItem('id', res.data.id);
  //         sessionStorage.setItem('nickname', res.data.nickname);
  //         sessionStorage.setItem('profileURL', res.data.profileURL);
  //         console.log(res.data.id);
  //         closeLoginModal(false);
  //         window.location.reload();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert('ERROR : 입력하신 정보를 다시 확인해주세요!!');
  //     });
  // };

  //회원가입페이지 open
  const openJoin = () => {
    window.open('/join', '_blank');
    closeLoginModal(false);
  };

  return (
    <>
      <ModalBg>
        <ModalInner>
          <InnerTop>
            <div>
              <img
                id="modalCloseBtn"
                onClick={() => closeLoginModal(false)}
                src={`${process.env.PUBLIC_URL}/image/close_icon.png`}
                width="20px"
                height="20px"
                alt="닫기버튼"
              />
            </div>
            <p id="title">로그인</p>
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
            <Button onClick={LoginHandler}>로그인하기</Button>
          </InnerMiddle>
          <InnerBottom>
            <p>아직 회원이 아니신가요?</p>
            <JoinBtn onClick={openJoin}>회원가입</JoinBtn>
          </InnerBottom>
        </ModalInner>
      </ModalBg>
    </>
  );
}

export default LoginModal;
