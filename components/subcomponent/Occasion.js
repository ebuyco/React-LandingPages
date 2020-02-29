import React from 'react';
import OccasionStyle from '../styles/OccasionStyle';

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
          <div className="grid__items">1</div>
          <div className="grid__items">2</div>
          <div className="grid__items">3</div>
          <div className="grid__items">4</div>
        </div>
      </div>
    </OccasionStyle>
  </>
);

export default Occupation;
