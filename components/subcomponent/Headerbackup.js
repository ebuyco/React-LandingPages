// import React, { useState, useEffect } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import HeaderStyle from '../styles/HeaderStyle';
import LogoHeader from '../../public/static/img/Logo1.png';
// import useDocumentScrollThrottled from './useDocumentScrollThrottled';

const Header = () => {
  // const [shouldHideHeader, setShouldHideHeader] = useState(false);
  // const [shouldShowShadow, setShouldShowShadow] = useState(false);

  // const MINIMUM_SCROLL = 80;
  // const TIMEOUT_DELAY = 400;

  // useDocumentScrollThrottled(callbackData => {
  //   const { previousScrollTop, currentScrollTop } = callbackData;
  //   const isScrolledDown = previousScrollTop < currentScrollTop;
  //   const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

  //   setShouldShowShadow(currentScrollTop > 2);

  //   setTimeout(() => {
  //     setShouldHideHeader(isScrolledDown && isMinimumScrolled);
  //   }, TIMEOUT_DELAY);
  // });

  // const shadowStyle = shouldShowShadow ? 'shadow' : '';
  // const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  const [isSticky, setSticky] = useState(false);
  // const [scroll, setScroll] = useState(1);
  const ref = useRef(null);
  const handleScroll = () => {
    // const scrollCheck = window.scrollY < 10;
    setSticky(ref.current.getBoundingClientRect().top);
    // if (scrollCheck !== scroll) {
    //   setScroll(scrollCheck);
    // }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [isSticky, setSticky]);

  return (
    <>
      <HeaderStyle>
        <div
          className={`header__main__wrapper${isSticky ? ' sticky' : ''}`}
          ref={ref}
        >
          {/* <div className={`header__main__wrapper ${shadowStyle} ${hiddenStyle}`}> */}
          <img
            src={LogoHeader}
            className="img__logo__header"
            alt="class__logo"
          />
          <div className="button__wrapper__header">
            <a className="gift__btn_header__finder" type="button">
              Gift Finder
            </a>
          </div>
          <ul className="ul__nav__wrapper">
            <li className="li__nav__wrapper">
              <a href="/" className="nav__link__wrapper">
                Home
              </a>
            </li>
            <li className="li__nav__wrapper">
              <a href="/" className="nav__link__wrapper">
                About
              </a>
            </li>
            <li className="li__nav__wrapper">
              <a href="/" className="nav__link__wrapper">
                Services
              </a>
            </li>
            <li className="li__nav__wrapper">
              <a href="/" className="nav__link__wrapper">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </HeaderStyle>
    </>
  );
};
export default Header;
