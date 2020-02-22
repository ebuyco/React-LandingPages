import styled from 'styled-components';

const GiftBanner = styled.section`
  width: 100%;
  margin: 0 auto;

  .gift__banner__wrapper {
    width: 100%;
    justify-content: center;
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0 auto;
    /* display: grid;
    grid-gap: 90px;
    grid-template-columns: 1fr 1fr; */
  }
  .banner__caption {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 3;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .banner__image {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 3;
    flex-wrap: wrap;
  }
  .image__banner__inner {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default GiftBanner;
