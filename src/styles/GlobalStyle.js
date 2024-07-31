import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #1c1e22;
    color: #e0e0e0;
    overflow-x: hidden;
  }

  a {
    color: #ffd020;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
