import React from 'react';
import BlogStyle from '../styles/BlogStyle';
import BannerImage from '../../public/static/img/Media4.png';

const Blog = () => (
  <>
    <BlogStyle>
      <div className="blog__wrapper">
        <div className="title__wrapper__header">
          <h2 className="title__header__blog">Our Best Blogs Ever</h2>
          <p className="subtitle__content">
            "Try our blog to find the best tips and tricks to select your gift"
          </p>
        </div>
        <div className="blog__wish__way">
          <div className="image__wrapper__way">
            <img
              src={BannerImage}
              className="image__wish__content"
              alt="image__content"
            />
          </div>
          <div className="image__caption__wrapper">
            <div className="image__caption__wrapper__inner">
              <p className="subtitle__caption__image">Mr. John Doe</p>
              <h1 className="caption__subtitle__name">
                The best way to wish your wife
              </h1>
              <p className="read__more__caption">Read More</p>
            </div>
          </div>
        </div>
        <div className="grid__box__wrapper">
          <div className="wrapper__box__inner">
            <div className="wrapper__box__inner__content">
              <h3 className="header__caption">
                Database to find the gifts for your girlfriend
              </h3>
              <p className="subtitle__data">
                Lorem ipsum dolor sit amet, consecteur adispicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore...
              </p>
              <a href="/" className="read__more__data__box">
                Read More
              </a>
            </div>
          </div>
          <div className="wrapper__box__inner">
            <div className="wrapper__box__inner__content">
              <h3 className="header__caption">
                How Artificial Intelligence read your mind to find the best gift
              </h3>
              <p className="subtitle__data">
                Lorem ipsum dolor sit amet, consecteur adispiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore...
              </p>
              <a href="/" className="read__more__data__box">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </BlogStyle>
  </>
);

export default Blog;
