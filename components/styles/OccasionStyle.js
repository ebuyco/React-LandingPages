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
    justify-content: flex-start;
  }
  .grid__items {
    height: auto;
    flex-basis: 30%;
    flex: auto;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    max-width: 20%;
    background-color: red;
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
`;

export default OccasionStyle;
