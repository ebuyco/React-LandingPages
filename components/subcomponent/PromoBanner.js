import React from 'react';
import PromoStyle from '../styles/PromoBanner';

const PromoBanner = () => (
  <>
    <PromoStyle>
      <div className="promo__banner__style__wrapper">
        <div className="promo__caption">
          <h2 className="promo__header"> Ready to get started ?</h2>
          <h2 className="promo__sub__context"> Sign up or contact us</h2>
        </div>
        <div className="promo__banner__button__wrapper">
          <button className="promo__button__fill" type="submit">
            Find Gift Now
          </button>
          <button className="promo__button__outline" type="submit">
            How it Works
          </button>
        </div>
      </div>
    </PromoStyle>
  </>
);

export default PromoBanner;
