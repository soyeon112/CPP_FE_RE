import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { authAction } from '../../store/auth';
import { modalAction } from '../../store/modal';

import { HeaderNav, LinkHover } from './styled';

//로그인 후에 보이는 nav
function Nav() {
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(authAction.logout());
    dispatch(modalAction.close());
  };

  return (
    <>
      <HeaderNav>
        <ul id="navUl">
          <li className="navLi">
            <Link to="/post/3">
              <img
                src={`${process.env.PUBLIC_URL}/image/bookmarks-icon.png`}
                width="12px"
                height="12px"
                alt=""
              />
            </Link>
          </li>
          <li className="navLi">
            <LinkHover to="/map">Search</LinkHover>
          </li>

          <li onClick={LogoutHandler} className="navLi">
            Logout
          </li>

          <li className="navLi">
            <LinkHover to="/mypage">MyPage</LinkHover>

            <li />
          </li>
        </ul>
      </HeaderNav>
    </>
  );
}

export default Nav;
