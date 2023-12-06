import React, { useState, Fragment } from 'react';

import { useDispatch } from 'react-redux';
import { modalAction } from '../../store/modal';

import { HeaderNav, LinkHover } from './styled';
import LoginModal from '../LoginModal/LoginModal';

//로그인 전에 보이는 nav
function Nav({ isModal }) {
  const dispatch = useDispatch();
  const ModalOpenHandler = () => {
    dispatch(modalAction.open());
  };

  return (
    <Fragment>
      <HeaderNav>
        <ul id="navUl">
          <li className="navLi">
            <LinkHover to="/map">Search</LinkHover>
          </li>

          <li className="navLi" onClick={ModalOpenHandler}>
            Login
          </li>

          {isModal && <LoginModal />}
        </ul>
      </HeaderNav>
    </Fragment>
  );
}

export default Nav;
