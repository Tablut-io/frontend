import { createGlobalStyle } from "styled-components";

// styling here instead of index.css if it depends on the current theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--dark-bg-color);
    color: var(--dark-text-color);
  }
`

export default GlobalStyle;