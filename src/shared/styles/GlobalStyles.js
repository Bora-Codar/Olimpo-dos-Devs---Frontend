import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    font-family: 'Montserrat', sans-serif;

    min-width: 100vw;
    min-height: 100vh;
  }

  button, input{
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;
