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
  }
  .grid__items {
    height: auto;
    flex-basis: 30%;
    flex: auto;
    width: 100%;
    box-sizing: border-box;
    max-width: 20%;
    background-color: ${props => props.theme.colors.gray.g100};
    margin: 1rem;
    @media (max-width: 1333px) {
      flex-basis: 33.33%;
    }
    @media (max-width: 1073px) {
      flex-basis: 33.33%;
    }
    @media (max-width: 815px) {
      flex-basis: 50%;
    }
    @media (max-width: 555px) {
      flex-basis: 100%;
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
`;

export default OccasionStyle;
