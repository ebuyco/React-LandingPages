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
  }
  .promo__banner__button__wrapper {
    flex-basis: 50%;
    height: auto;
    flex: auto;
    width: 100%;
    max-width: 50%;
  }
  .promo__header {
    font-family: 'NunitoSemiBold';
  }
  .promo__sub__context {
    font-family: 'Nunitolight';
  }
  .promo__button__fill {
    color: #fff;
    background-color: ${props => props.theme.colors.gray.g1200};
    padding: 1vw 3vw 1vw 3vw;
    border-radius: 0.3rem;
    border: 0 solid ${props => props.theme.colors.gray.g1200};
    text-transform: uppercase;
  }
  .promo__button__outline {
    color: #fff;
    background-color: transparent;
    padding: 1vw 3vw 1vw 3vw;
    border-radius: 0.3rem;
    border: 1px solid ${props => props.theme.colors.gray.g1200};
    text-transform: uppercase;
    margin-left: 1vw;
  }
`;

export default PromoBannerStyle;
