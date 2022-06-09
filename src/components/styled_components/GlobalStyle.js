import { createGlobalStyle } from "styled-components";

// styling here instead of index.css if it depends on the current theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--dark-main-bg-color);
    color: white;
  }
`

export default GlobalStyle;