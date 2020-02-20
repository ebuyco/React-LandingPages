import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  black: '#000000',
  base: '#FFFFFF',
  maxWidth: '100%',
  screens: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    xl: '1280px',
  },
  colors: {
    primary: {
      p100: '#ebf8ff',
      p300: '#90cdf4',
      p500: '#4299e1',
      p700: '#2b6cb0',
      p900: '#2a4365',
    },
    secondary: {
      s100: '#fffff0',
      s300: '#faf089',
      s2500: '#ecc94b',
      s700: '#b7791f',
      s900: '#744210',
    },
    gray: {
      g100: '#F7FAFC',
      g200: '#EDF2f7',
      g300: '#E2E8F0',
      g400: '#CBD5E0',
      g500: '#A0AEC0',
      g600: '#718096',
      g700: '#4A5568',
      g800: '#2D3748',
      g900: '#1A202C',
    },
    red: {
      r100: '#FFF5F5',
      r200: '#FED7D7',
      r300: '#FEB2B2',
      r400: '#FC8181',
      r500: '#F56565',
      r600: '#E53E3E',
      r700: '#C53030',
      r800: '#9B2C2C',
      r900: '#742A2A',
    },
    orange: {
      o100: '#FFFAF0',
      o200: '#FEEBC8',
      o300: '#FBD38D',
      o400: '#F6AD55',
      o500: '#ED8936',
      o600: '#DD6B20',
      o700: '#C05621',
      o800: '#9C4221',
      o900: '#7B341E',
    },
    yellow: {
      y100: '#FFFFF0',
      y200: '#FEFCBF',
      y300: '#FAF089',
      y400: '#F6E05E',
      y500: '#ECC94B',
      y600: '#D69E2E',
      y700: '#B7791F',
      y800: '#975A16',
      y900: '#744210',
    },
    teal: {
      t100: '#E6FFFA',
      t200: '#B2F5EA',
      t300: '#81E6D9',
      t400: '#4FD1C5',
      t500: '#38B2AC',
      t600: '#319795',
      t700: '#2C7A7B',
      t800: '#285E61',
      t900: '##234E52',
    },
    blue: {
      b100: '#EBF8FF',
      b200: '#BEE3F8',
      b300: '#90CDF4',
      b400: '#63B3ED',
      b500: '#4299E1',
      b600: '#3182CE',
      b700: '#2B6CB0',
      b800: '#2C5282',
      b900: '#2A4365',
    },
    indigo: {
      i100: '#EBF4FF',
      i200: '#C3DAFE',
      i300: '#A3BFFA',
      i400: '#7F9CF5',
      i500: '#667EEA',
      i600: '#5A67D8',
      i700: '#4C51BF',
      i800: '#434190',
      i900: '#3C366B',
    },
    purple: {
      p100: '#FAF5FF',
      p200: '#E9D8FD',
      p300: '#D6BCFA',
      p400: '#B794F4',
      p500: '#9F7AEA',
      p600: '#805AD5',
      p700: '#6B46C1',
      p800: '#553C9A',
      p900: '#44337A',
    },
    pink: {
      pi100: '#FFF5F7',
      pi200: '#FED7E2',
      pi300: '#FBB6CE',
      pi400: '#F687B3',
      pi500: '#ED64A6',
      pi600: '#D53F8C',
      pi700: '#B83280',
      pi800: '#97266D',
      pi900: '#702459',
    },
  },
  extend: {
    boxShadow: {
      huge: '0 30px 60px -15px rgba(0, 0, 0, .25)',
    },
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
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
