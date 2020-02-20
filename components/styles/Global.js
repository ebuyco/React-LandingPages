import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  black: '#393939',
  base: '#ffffff',
  maxWidth: '100%',
  screens: {
    tablet: '768px',
    desktop: '1024px',
  },
  colors: {
    primary: {
      100: '#ebf8ff',
      300: '#90cdf4',
      p500: '#4299e1',
      700: '#2b6cb0',
      900: '#2a4365',
    },
    secondary: {
      100: '#fffff0',
      300: '#faf089',
      500: '#ecc94b',
      700: '#b7791f',
      900: '#744210',
    },
  },
  extend: {
    boxShadow: {
      huge: '0 30px 60px -15px rgba(0, 0, 0, .25)',
    },
  },
};

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const GlobalStyles = createGlobalStyle`



            *,
          *::before,
          *::after {
            box-sizing: border-box;
          }


          ul[class],
          ol[class] {
            padding: 0;
          }


          body,
          h1,
          h2,
          h3,
          h4,
          p,
          ul[class],
          ol[class],
          li,
          figure,
          figcaption,
          blockquote,
          dl,
          dd {
            margin: 0;
          }


          body {
            min-height: 100vh;
            scroll-behavior: smooth;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            font-family: 'Roboto-Regular';
            background-color: ${theme.base};
            background-size: cover;
          }


          ul[class],
          ol[class] {
            list-style: none;
          }

          a:not([class]) {
            text-decoration-skip-ink: auto;
          }


          img {
            max-width: 100%;
            display: block;
          }


          article > * + * {
            margin-top: 1em;
          }


          input,
          button,
          textarea,
          select {
            font: inherit;
          }


          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
      a {
        text-decoration: none;
        color: ${theme.black};
      }
      button {   font-family: 'Roboto-Regular'; }
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyles />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

export default Page;
