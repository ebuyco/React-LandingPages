import React from 'react';
import OccasionStyle from '../styles/OccasionStyle';
import Birthday from '../../public/static/img/Media.png';
import Anniversary from '../../public/static/img/Media1.png';
import Valentines from '../../public/static/img/Media2.png';
import Christmas from '../../public/static/img/Media3.png';
import Arrow from '../../public/static/img/arrow--left.svg';

const Occupation = () => (
  <>
    <OccasionStyle>
      <div className="occupation__header__wrapper">
        <h2 className="occupation__title__header">Gifts for all Occasions</h2>
        <p className="occupation__sub__title">
          "Try our web app to find the best gifts for all occasions"
        </p>
      </div>
      <div className="container__boxes">
        <div className="grid__boxes__wrapper">
          <div className="grid__items">
            <div className="card__image">
              <img
                src={Birthday}
                className="img__banner__birthday"
                alt="birthday"
              />
            </div>
            <div className="wrapper__content__inner">
              <p className="text__caption__font">Birthday</p>
              <a className="btn__occasion__seemore">
                See More{' '}
                <img
                  className="image__icon"
                  src={Arrow}
                  alt="image__icon__name"
                />
              </a>
            </div>
          </div>
          <div className="grid__items">
            <div className="card__image">
              <img
                src={Anniversary}
                className="img__banner__birthday"
                alt="birthday"
              />
            </div>
            <div className="wrapper__content__inner">
              <p className="text__caption__font">Anniversary</p>
              <a className="btn__occasion__seemore">
                See More{' '}
                <img
                  className="image__icon"
                  src={Arrow}
                  alt="image__icon__name"
                />
              </a>
            </div>
          </div>
          <div className="grid__items">
            <div className="card__image">
              <img
                src={Valentines}
                className="img__banner__birthday"
                alt="birthday"
              />
            </div>
            <div className="wrapper__content__inner">
              <p className="text__caption__font">Valentine's Day</p>
              <a className="btn__occasion__seemore">
                See More{' '}
                <img
                  className="image__icon"
                  src={Arrow}
                  alt="image__icon__name"
                />
              </a>
            </div>
          </div>
          <div className="grid__items">
            <div className="card__image">
              <img
                src={Christmas}
                className="img__banner__birthday"
                alt="birthday"
              />
            </div>
            <div className="wrapper__content__inner">
              <p className="text__caption__font">Christmas</p>
              <a className="btn__occasion__seemore">
                See More{' '}
                <img
                  className="image__icon"
                  src={Arrow}
                  alt="image__icon__name"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </OccasionStyle>
  </>
);

export default Occupation;
