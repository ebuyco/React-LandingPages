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
    background-color: #f0f1f3;
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
  .title__caption {
    font-family: 'NunitoBold';
    font-size: 4vw;
    margin-bottom: 2rem;
  }
  .banner__caption__inner {
    width: 100%;
    max-width: 60%;
    text-align: left;
  }
  .title__sub_title {
    font-family: 'NunitoRegular';
    font-size: 1.6vw;
    margin-bottom: 2rem;
  }
  .button__caption {
    color: #fff;
    background-color: ${props => props.theme.colors.orange.o1000};
    float: left;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 0.3rem;
  }
  .title__caption__2nd {
    font-family: 'Nunitolight';
    font-size: 2vw;
    margin-bottom: 2rem;
  }
  .title__sub_title__2nd {
    font-family: 'Nunitolight';
    font-size: 1.7vw;
    margin-bottom: 2rem;
  }
  .button__caption__2nd {
    color: ${props => props.theme.colors.orange.o1000};
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.orange.o1000};
    float: left;
    padding: 0.8rem 2rem 0.8rem 2rem;
    border-radius: 0.3rem;
    font-family: 'Nunitolight';
    text-transform: uppercase;
  }
  .banner__caption__inner__2nd {
    width: 100%;
    max-width: 70%;
    text-align: left;
  }
`;

export default GiftBanner;
