import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Inter', sans-serif;
  }
  button {
    cursor: pointer;
  }
  li{
    list-style: none
  }
  :root{
    --color-primary: #27AE60;
    --color-secondary: #EB5757;
    --grey-600: #333333;
    --grey-300: #828282;
    --grey-100: #E0E0E0;
    --grey-0: #F5F5F5;
    --grey-4: #BDBDBD;
    --grey-6: #f2f2f2

    --color-white: #FFFFFF;
  }
  `

