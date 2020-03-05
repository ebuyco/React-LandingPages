import React from 'react';
import FooterStyle from '../styles/FooterStyle';
import LogoFooter from '../../public/static/img/logo.png';
import SocialFacebook from '../../public/static/img/social-facebook.svg';
import SocialTwitter from '../../public/static/img/social-twitter.svg';
import SocialInstagram from '../../public/static/img/social-instagram.svg';
import SocialYoutube from '../../public/static/img/social-youtube.svg';
import SocialPinterest from '../../public/static/img/social-pinterest.svg';

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
        <div className="social__wrapper__icons">
          <div className="social__inner__icons">
            <a href="/" className="icons__content">
              <img
                src={SocialFacebook}
                className="icon__content__inner"
                alt="name__icon"
              />
            </a>
            <a href="/" className="icons__content">
              <img
                src={SocialTwitter}
                className="icon__content__inner"
                alt="name__icon"
              />
            </a>
            <a href="/" className="icons__content">
              <img
                src={SocialInstagram}
                className="icon__content__inner"
                alt="name__icon"
              />
            </a>
            <a href="/" className="icons__content">
              <img
                src={SocialYoutube}
                className="icon__content__inner"
                alt="name__icon"
              />
            </a>
            <a href="/" className="icons__content">
              <img
                src={SocialPinterest}
                className="icon__content__inner"
                alt="name__icon"
              />
            </a>
          </div>
        </div>
        <div className="copyright__inner">
          <h4 className="copyright--title">© 2010-2020 Privacy-Terms</h4>
        </div>
      </div>
    </FooterStyle>
  </>
);

export default Footer;
