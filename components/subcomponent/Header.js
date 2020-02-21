import React, { useEffect, useRef, useState } from 'react';
import HeaderStyle from '../styles/HeaderStyle';
import LogoHeader from '../../public/static/img/Logo1.png';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top);
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
          className={`header__main__wrapper${
            isSticky ? ' sticky' : ' sticky--inner'
          }`}
          ref={ref}
        >
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
