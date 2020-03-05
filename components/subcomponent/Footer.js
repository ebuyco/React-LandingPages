import React from 'react';
import FooterStyle from '../styles/FooterStyle';
import LogoFooter from '../../public/static/img/logo.png';

const Footer = () => (
  <>
    <FooterStyle>
      <div className="footer__wrapper">
        <div className="footer__inner">
          <div className="footer__navigation__button">
            <ul className="wrapper__navigation">
              <li className="navigation__list">Home</li>
              <li className="navigation__list">About</li>
              <li className="navigation__list__logo">
                <img
                  className="logo_bottom__img"
                  src={LogoFooter}
                  alt="name__logo"
                />
              </li>
              <li className="navigation__list">Service</li>
              <li className="navigation__list">Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  </>
);

export default Footer;
