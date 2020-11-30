import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const cssVars = {
  fontFamily: '"4Mini"',
  fontSize_S: '8px',
  fontSize_M: '16px',
  fontSize_L: '24px',
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: ${cssVars.fontFamily};
    font-weight: normal;
    font-style: normal;

    src: url('assets/font/4Mini.ttf.woff') format('woff'),
    url('assets/font/4Mini.ttf.svg#4Mini') format('svg'), 
    url('assets/font/4Mini.ttf.eot'),
    url('assets/font/4Mini.ttf.eot?#iefix') format('embedded-opentype');
  }

  body {
    margin: 0;
    background-color: #282c34;
    color: white;
    font-family: ${cssVars.fontFamily};
    font-size: ${cssVars.fontSize_S};

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }
`;
