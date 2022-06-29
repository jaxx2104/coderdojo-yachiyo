import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    -webkit-font-smoothing: antialiased;
    background-color: rgb(255, 255, 255);
    color: rgb(73, 80, 87);
    font-weight: 400;
    transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
    line-height: 1.4;
    font-family: "Noto Sans JP", sans-serif !important;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
