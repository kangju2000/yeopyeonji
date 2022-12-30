import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    height: 100%;
  }
  body {
    height: 100%;
  }
  body > div {
    height: 100%;
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
