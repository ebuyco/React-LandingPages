import styled from 'styled-components';

const HomepageStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  .classes_name {
    color: ${props => props.theme.colors.primary.p500};
  }
`;

export default HomepageStyle;
