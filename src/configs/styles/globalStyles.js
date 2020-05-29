import { createGlobalStyle } from 'styled-components';
/* eslint-disable */
export default createGlobalStyle`
  html, body {
    width: 100%;
    padding: 0;
    font-family: 'Gilroy-Light';
    color: ${(props)=>props.theme.Gray20};
    margin: 0;
  }
  *{
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  `;