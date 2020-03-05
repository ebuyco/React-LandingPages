import styled from 'styled-components';

const FooterStyle = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.gray.g1000};
  color: ${props => props.theme.colors.g200};
  font-family: 'NunitoRegular';
  .footer__navigation__button {
    width: 100%;
    max-width: 70%;
    margin: 0 auto;

    &:after {
      height: 2px;
      content: '';
      width: 100%;
      max-width: 70%;
      position: absolute;
      left: 15vw;
      margin-top: 2vw;
      border-top: 1px solid ${props => props.theme.colors.gray.g1200};
    }
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
    font-family: 'NunitoSemiBold';
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
  .footer__inner {
    padding: 4vw;
  }
  .social__wrapper__icons {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .social__inner__icons {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 4vw;
    margin-top: 2vw;
  }
  .icons__content {
    flex: 0 0 5vw;
  }
  .copyright__inner {
    width: 100%;
    margin: 0 auto;
    font-family: 'NunitoRegular';
  }
  .copyright--title {
    font-family: 'Nunitolight';
  }
`;

export default FooterStyle;
