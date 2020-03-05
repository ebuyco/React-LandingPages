import styled from 'styled-components';

const PromoBannerStyle = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.orange.o1000};
  .promo__banner__style__wrapper {
    width: 100%;
    max-width: 80%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 4vw;
    font-family: 'NunitoRegular';
  }
  .promo__caption {
    height: auto;
    flex-basis: 50%;
    flex: auto;
    width: 100%;
    max-width: 50%;
    @media (max-width: ${props => props.theme.medium}) {
      flex-basis: 100%;
      max-width: 100%;
      margin-bottom: 2rem;
    }
  }
  .promo__banner__button__wrapper {
    flex-basis: 50%;
    height: auto;
    flex: auto;
    width: 100%;
    max-width: 50%;
    @media (max-width: ${props => props.theme.medium}) {
      flex-basis: 100%;
      max-width: 100%;
      text-align: center;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    }
  }
  .promo__header {
    font-family: 'NunitoSemiBold';
    font-size: 2.5vw;
    @media (max-width: ${props => props.theme.small}) {
      font-size: 4.5vw;
    }
  }
  .promo__sub__context {
    font-family: 'Nunitolight';
    font-size: 2vw;
    @media (max-width: ${props => props.theme.small}) {
      font-size: 3.5vw;
    }
  }
  .promo__button__fill {
    color: #fff;
    background-color: ${props => props.theme.colors.gray.g1200};
    padding: 1vw 3vw 1vw 3vw;
    border-radius: 0.3rem;
    border: 0 solid ${props => props.theme.colors.gray.g1200};
    text-transform: uppercase;
    @media (max-width: ${props => props.theme.large}) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .promo__button__outline {
    color: #fff;
    background-color: transparent;
    padding: 1vw 3vw 1vw 3vw;
    border-radius: 0.3rem;
    border: 1px solid ${props => props.theme.colors.gray.g1200};
    text-transform: uppercase;
    margin-left: 1vw;
    @media (max-width: ${props => props.theme.large}) {
      width: 100%;
      margin-top: 2vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }
  }
`;

export default PromoBannerStyle;
