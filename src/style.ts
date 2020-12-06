import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const borderColor = 'rgba(255, 255, 255, 0.1)';
const borderWidth = '1px';
const borderStyle = 'solid';
export const cssVars = {
  fontFamily: '"4Mini"',
  fontSize_S: '8px',
  fontSize_M: '16px',
  fontSize_L: '24px',
  borderColor,
  borderWidth,
  borderStyle,
  border: `${borderStyle} ${borderColor} ${borderWidth}`,
  embossLight: 'rgba(255, 255, 255, 0.2)',
  embossShadow: 'rgba(0, 0, 0, 0.2)',
  colorBackground: '#282c34',
  colorText: '#AFC4C7',
  layoutHeaderHeight: '40px',
  layoutSidebarWidth: '320px',
  layoutSidebarMinWidth: '30vw',
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
    background-color: ${cssVars.colorBackground};
    color: ${cssVars.colorText};
    font-family: ${cssVars.fontFamily};
    font-size: ${cssVars.fontSize_S};

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }
`;
