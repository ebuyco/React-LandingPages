import styled from 'styled-components';

const BlogStyle = styled.section`
  width: 100%;
  margin: 0 auto;
  .blog__wrapper {
    width: 100%;
    max-width: 80%;
    height: auto;
    margin: 0 auto;
  }
  .blog__wish__way {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    font-family: 'NunitoRegular';
    background-color: ${props => props.theme.colors.gray.g1200};
    color: ${props => props.theme.base};
  }

  .image__caption__wrapper {
    height: auto;
    flex-basis: 70%;
    flex: auto;
    width: 100%;
    max-width: 70%;
    text-align: left;
    @media (max-width: ${props => props.theme.large}) {
      flex-basis: 100%;
      max-width: 100%;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
  .subtitle__caption__image {
    color: ${props => props.theme.base};
    text-align: left;
    font-family: 'Nunitolight';
    @media (max-width: ${props => props.theme.large}) {
      text-align: center;
    }
  }
  .caption__subtitle__name {
    font-family: 'NunitoRegular';
    font-size: 2vw;
    margin-bottom: 2vw;
    margin-top: 2vw;
  }
  .title__wrapper__header {
    font-family: 'NunitoRegular';
    margin-top: 4vw;
    margin-bottom: 4vw;
  }
  .title__header__blog {
    margin-bottom: 2vw;
  }
  .subtitle__content {
    font-family: 'Nunitolight';
  }
  .image__caption__wrapper__inner {
    width: 100%;
    max-width: 40%;
    margin-left: 4vw;
    @media (max-width: ${props => props.theme.large}) {
      text-align: center;
      width: 100%;
      max-width: 100%;
    }
  }
  .image__wrapper__way {
    height: auto;
    flex-basis: 30%;
    flex: auto;
    width: 100%;
    max-width: 30%;
    @media (max-width: ${props => props.theme.large}) {
      flex-basis: 100%;
      max-width: 100%;
      margin-bottom: 4vw;
      margin-top: 4vw;
    }
  }
  .image__wish__content {
    width: 100%;
    height: auto;
    @media (max-width: ${props => props.theme.large}) {
      max-width: 50%;
      height: auto;
      width: 100%;
      margin: 0 auto;
    }
  }

  .grid__box__wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    font-family: 'NunitoRegular';
    background-color: ${props => props.theme.base};
    color: ${props => props.theme.colors.gray.g1200};
    margin-top: 4vw;
    margin-bottom: 4vw;
  }
  .wrapper__box__inner {
    height: auto;
    flex-basis: 45%;
    flex: auto;
    width: 100%;
    max-width: 45%;
    margin-right: 1vw;
    margin-left: 1vw;
    background-color: #ffffff;
    box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &:hover {
      transform: scale(1.06) rotate(0.0004deg);
    }
    @media (max-width: ${props => props.theme.large}) {
      flex-basis: 100%;
      max-width: 100%;
      text-align: center;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      margin-bottom: 4vw;
    }
  }
  .wrapper__box__inner__content {
    padding: 2vw;
    text-align: left;
    font-family: 'NunitoRegular';
  }
  .header__caption {
    font-family: 'NunitoBold';
    width: 100%;
    max-width: 70%;
  }
  .subtitle__data {
    font-family: 'Nunitolight';
    margin-top: 2vw;
    margin-bottom: 2vw;
  }
  .read__more__data__box {
    font-family: 'Nunitolight';
  }
`;

export default BlogStyle;
