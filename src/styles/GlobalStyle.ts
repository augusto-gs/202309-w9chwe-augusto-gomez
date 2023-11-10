import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.main}
  }

  body
  {
    margin: 0;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background}
  }

  h1, h2 {
    margin: 0
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img{
    width: 100%
  }

  button{
    cursor: pointer;
  }

  input {
    all: unset
  }

`;

export default GlobalStyle;
