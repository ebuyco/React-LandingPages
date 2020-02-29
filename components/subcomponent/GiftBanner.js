import React from 'react';
import BannerImage from '../../public/static/img/Background.jpg';
import BannerImageMedia from '../../public/static/img/Media_Background.jpg';
import BannerStyle from '../styles/BannerStyle';

const GiftBanner = () => (
  <>
    <BannerStyle>
      <div className="gift__banner__wrapper">
        <div className="banner__caption">
          <div className="banner__caption__inner">
            <h1 className="title__caption">
              Find a gift for your wife or girlfriend
            </h1>
            <p className="title__sub_title">
              Struggling to find a gift for your wife or girlfriend? No problem!
            </p>
            <button className="button__caption" type="submit">
              Find Gift Now
            </button>
          </div>
        </div>
        <div className="banner__image">
          <img
            className="image__banner__inner"
            src={BannerImage}
            alt="name__banner"
          />
        </div>
      </div>

      <div className="gift__banner__wrapper">
        <div className="banner__image">
          <img
            className="image__banner__inner"
            src={BannerImageMedia}
            alt="name__banner"
          />
        </div>
        <div className="banner__caption">
          <div className="banner__caption__inner__2nd">
            <h1 className="title__caption__2nd">How we work</h1>
            <p className="title__sub_title__2nd">
              We've actually already asked hundreds of women what they want, and
              made a database with the results, All you have to do is take our
              short survey that only takes seconds, and our proprietary
              algorithm will match you with a few perfect gift options.
            </p>
            <button className="button__caption__2nd" type="submit">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </BannerStyle>
  </>
);

export default GiftBanner;
