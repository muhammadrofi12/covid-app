import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  @font-face {
    font-family: 'Poppins-Light';
    src: url('../../assets/fonts/Poppins/Poppins-Light.ttf') format('truetype');
  }

  * {
  font-family: 'Poppins-Light', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
