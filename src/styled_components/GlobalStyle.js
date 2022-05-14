import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.lightTheme ? '#d7d7d7' : '#383838'};
  }
`

export default GlobalStyle;