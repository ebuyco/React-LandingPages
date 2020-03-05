import styled from 'styled-components';

const FooterStyle = styled.section`
  width: 100%;
  border: 0 solid ${props => props.theme.colors.gray.g1000};
  color: ${props => props.theme.colors.g200};
  font-family: 'NunitoRegular';
  .footer__navigation__button {
    width: 100%;
    max-width: 70%;
    margin: 0 auto;
  }
  .wrapper__navigation {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navigation__list {
    flex: 1 5 20px;
  }
  .logo_bottom__img {
    width: 20%;
    height: auto;
    margin: 0 auto;
  }
  .navigation__list__logo {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex: 1 1 20px;
  }
`;

export default FooterStyle;
