import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .slick-dots li button:before {
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }
`;

export default GlobalStyle;
