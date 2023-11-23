import React, { useState } from 'react';

import { HeaderNav, LinkHover } from './styled';
import LoginModal from '../Login/LoginModal';

function Nav() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <>
      <HeaderNav>
        <ul id="navUl">
          <li className="navLi">
            <LinkHover to="/map">Search</LinkHover>
          </li>

          <li
            className="navLi"
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            Login
          </li>

          {openLoginModal && <LoginModal closeLoginModal={setOpenLoginModal} />}
        </ul>
      </HeaderNav>
    </>
  );
}

export default Nav;
