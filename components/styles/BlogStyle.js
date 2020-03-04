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
  .image__wrapper__way {
    height: auto;
    flex-basis: 30%;
    flex: auto;
    width: 100%;
    max-width: 30%;
  }
  .image__caption__wrapper {
    height: auto;
    flex-basis: 70%;
    flex: auto;
    width: 100%;
    max-width: 70%;
    text-align: left;
    padding: 4vw;
  }
  .subtitle__caption__image {
    color: ${props => props.theme.base};
    text-align: left;
  }
`;

export default BlogStyle;
