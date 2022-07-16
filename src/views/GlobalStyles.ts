import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    font-size: 16px;
    font-family: Roboto, Arial, serif;
    height: 100%;
    margin: 0;
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`
