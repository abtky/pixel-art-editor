import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    background-color: #282c34;
    color: white;

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }
`;
