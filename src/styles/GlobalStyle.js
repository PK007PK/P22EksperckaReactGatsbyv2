import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.font.mainFont};
    color: ${({ theme }) => theme.color.mainBody};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    max-width: 2700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  button {
    padding: 0;
    cursor: pointer;
    border: none;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }



`;

export default GlobalStyle;
