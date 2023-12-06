import React from 'react';
import { Link } from 'react-router-dom';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { HeaderWrap, InnerLogoSection } from './styled';
import Nav from '../Nav/Nav';
import NavAuth from '../NavAuth/NavAuth';

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const isModal = useSelector((state) => state.modal.isModal);

  {
    isModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }

  return (
    <Fragment>
      <HeaderWrap>
        <InnerLogoSection>
          <Link to="/">
            <img
              id="logo"
              src={`${process.env.PUBLIC_URL}/image/cpp_logo.png`}
              alt=""
            />
          </Link>
        </InnerLogoSection>
        {!isAuth && <Nav isModal={isModal} />}
        {isAuth && <NavAuth />}
      </HeaderWrap>
    </Fragment>
  );
}

export default Header;
