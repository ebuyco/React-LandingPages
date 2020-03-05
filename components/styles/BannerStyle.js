import styled from 'styled-components';

const GiftBanner = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: #f0f1f3;
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
    @media (max-width: 1024px) {
      flex-flow: row wrap;
      align-items: center;
    }
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
    @media (max-width: 1024px) {
      height: auto;
      flex-basis: 30%;
      flex: auto;
      width: 100%;
      box-sizing: border-box;
      max-width: 50%;
    }
    @media (max-width: 800px) {
      flex-basis: 50%;
      width: 100%;
      max-width: 50%;
      order: 1;
    }
    @media (max-width: 600px) {
      width: 100%;
      max-width: 60%;
      flex-basis: 60%;
    }
    @media (max-width: 480px) {
      max-width: 100%;
      flex-basis: 100%;
    }
  }
  .banner__image {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 3;
    flex-wrap: wrap;
    @media (max-width: ${props => props.theme.large}) {
      height: auto;
      flex-basis: 30%;
      flex: auto;
      width: 100%;
      box-sizing: border-box;
      max-width: 50%;
    }
    @media (max-width: ${props => props.theme.medium}) {
      flex-basis: 50%;
      width: 100%;
      max-width: 50%;
    }
    @media (max-width: ${props => props.theme.small}) {
      order: 2;
      width: 100%;
      max-width: 40%;
      flex-basis: 40%;
    }
    @media (max-width: ${props => props.theme.xtraSmall}) {
      max-width: 100%;
      flex-basis: 100%;
    }
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
    @media (max-width: 800px) {
      max-width: 70%;
      text-align: left;
    }
    @media (max-width: 480px) {
      padding: 2rem;
    }
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
    padding: 1vw 2vw 1vw 2vw;
    border-radius: 0.3rem;
    @media (max-width: 800px) {
      font-size: 1.5vw;
      width: 100%;
    }
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
    padding: 0.8vw 2vw 0.8vw 2vw;
    border-radius: 0.3rem;
    font-family: 'Nunitolight';
    text-transform: uppercase;
    @media (max-width: 800px) {
      font-size: 1.5vw;
      width: 100%;
    }
  }
  .banner__caption__inner__2nd {
    width: 100%;
    max-width: 70%;
    text-align: left;
    @media (max-width: 480px) {
      padding: 2rem;
    }
  }
`;

export default GiftBanner;
