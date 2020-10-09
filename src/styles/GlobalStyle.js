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

  a {
    color: inherit;
    text-decoration: none;
  }

  


  .txtHoverFocusTab {
    position: relative;
    &:before {
      content: "";
      background-color: ${({ theme }) => theme.color.active};
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -5px;
      left: 0;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.1s ease-in-out;
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }

    &:focus {
      outline: none !important;
      border: none !important;
    }

    &:focus::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

export default GlobalStyle;
