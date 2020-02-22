import styled from 'styled-components';

const Header = styled.header`
  width: ${props => props.theme.maxWidth};
  background-color: ${props => props.theme.colors.gray.g100};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  .header__main__wrapper {
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    height: 100px;
    padding-top: 2rem;
    font-family: 'Roboto-regular';
  }

  .img__logo__header {
    width: 100%;
    max-width: 5vh;
    height: auto;
    float: left;
  }
  .ul__nav__wrapper {
    padding: 0;
    margin: 0;
    text-align: center;
    display: flex;
    vertical-align: top;
    justify-content: center;
    align-items: center;
    font-family: 'Nunitolight';
  }
  .li__nav__wrapper {
    list-style-type: none;
    padding: 0;
    margin: 4px 0 4px 0;
    display: inline;
    flex: 0.1;
  }
  .nav__link__wrapper {
    color: ${props => props.theme.black};
  }
  .button__wrapper__header {
    float: right;
    font-family: 'Nunitolight';
  }
  .gift__btn_header__finder {
    color: ${props => props.theme.colors.orange.o400};
    border: 1px solid ${props => props.theme.colors.orange.o400};
    padding: 0.55555rem 0.999999rem 0.55555rem 0.999999999rem;
    border-radius: 0.555555555555rem;
    cursor: pointer;
  }
`;

export default Header;
