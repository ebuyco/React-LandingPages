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
    padding: 2vw;
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
`;

export default PromoBannerStyle;
