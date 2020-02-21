import React from 'react';
import HeaderStyle from '../styles/HeaderStyle';
import LogoHeader from '../../public/static/img/Logo1.png';

const Header = () => (
  <>
    <HeaderStyle>
      <div className="header__main__wrapper">
        <img src={LogoHeader} className="img__logo__header" alt="class__logo" />
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
export default Header;
