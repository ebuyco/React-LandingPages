import styled from 'styled-components';

const Header = styled.header`
  width: ${props => props.theme.maxWidth};

  .header__main__wrapper {
    width: 1200px;
    margin: 0 auto;
    height: 70px;
    text-align: center;
  }

  .img__logo__header {
    width: 100%;
    max-width: 10vh;
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
  .gift__btn_header__finder {
    float: right;
  }
`;

export default Header;
