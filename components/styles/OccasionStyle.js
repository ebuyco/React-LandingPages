import styled from 'styled-components';

const OccasionStyle = styled.section`
  width: 100%;
  .container__boxes {
    max-width: 80%;
    margin: 0 auto;
    width: 100%;
  }
  .grid__boxes__wrapper {
    display: flex;
    flex-flow: row wrap;
    /* justify-content: flex-start; */
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
  }
  .grid__items {
    height: auto;
    flex-basis: 30%;
    flex: auto;
    width: 100%;
    box-sizing: border-box;
    max-width: 20%;

    background-color: ${props => props.theme.colors.gray.g1000};
    margin: 1rem;
    cursor: pointer;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
    &:hover {
      transform: scale(1.045) rotate(0.0001deg);
      background-color: #ffffff;
      box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
    }
    @media (max-width: 1333px) {
      flex-basis: 33.33%;
      max-width: 23%;
    }
    @media (max-width: 1024px) {
      flex-basis: 33.33%;
      max-width: 30%;
    }
    @media (max-width: 800px) {
      flex-basis: 50%;
      max-width: 60%;
    }
    @media (max-width: 600px) {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
  .img__banner__birthday {
    width: 100%;
    height: auto;
  }
  .text__caption__font {
    display: flex;
    justify-content: flex-start;
    font-family: 'Nunitolight';
  }
  .wrapper__content__inner {
    padding: 2rem;
  }
  .btn__occasion__seemore {
    display: flex;
    cursor: pointer;
    margin-top: 4rem;
  }
  .image__icon {
    width: 100%;
    max-width: 2%;
    margin-left: 0.5555rem;
  }
  .occupation__title__header {
    font-family: 'Roboto-regular';
    margin-bottom: 1rem;
  }
  .occupation__sub__title {
    font-family: 'Nunitolight';
  }
  .occupation__header__wrapper {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export default OccasionStyle;
