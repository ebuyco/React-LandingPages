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
    font-size: 3vw;
    margin-bottom: 3vw;
    margin-top: 4vw;
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
    max-width: 70%;
    margin-left: 4vw;
    @media (max-width: ${props => props.theme.large}) {
      text-align: center;
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
`;

export default BlogStyle;
