import React from 'react';
import HeaderStyle from '../styles/HeaderStyle';
import LogoHeader from '../../public/img/Logo1.png';

const Header = () => (
  <>
    <HeaderStyle>
      <div className="header__main__wrapper">
        <img src={LogoHeader} className="img__logo__header" alt="class__logo" />
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
        <button className="gift__btn_header__finder" type="button">
          Gift Finder
        </button>
      </div>
    </HeaderStyle>
  </>
);

export default Header;
