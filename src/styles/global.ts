import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --grayish-blue: hsl(237, 18%, 59%);    
    --dark-blue: hsl(235, 16%, 14%);
    --dark-black-blue: hsl(234, 17%, 12%);
    --soft-red:  hsl(345, 95%, 68%);

    --white: #fff;

    --mobile: 375px;
    --desktop: 768px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Red Hat Text', sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyles;
