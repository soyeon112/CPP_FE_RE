import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { authAction } from '../../Store/auth';

import { HeaderNav, LinkHover } from './styled';

function Nav() {
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(authAction.logout());
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
