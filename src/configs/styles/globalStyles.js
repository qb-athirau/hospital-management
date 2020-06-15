import styled, { createGlobalStyle } from 'styled-components';
/* eslint-disable */
export default createGlobalStyle`
  html, body {
    width: 100%;
    padding: 0;
    font-family: 'Gilroy-Light';
    color: ${(props) => props.theme.Gray20};
    margin: 0;
  }
  *{
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  `;

export const Container = styled.div`
  padding-left: ${(props) => {
    if (props.full) return 0;
    return 'calc((100vw - 960px) / 2)';
  }};
  padding-right: ${(props) => {
    if (props.full) return 0;
    return 'calc((100vw - 960px) / 2)';
  }};
  padding-top: ${(props) => {
    if (props.fullVertical) return 0;
    if (props.small) return '15px';
    return '25px';
  }};
  padding-bottom: ${(props) => {
    if (props.fullVertical) return 0;
    if (props.small) return '15px';
    return '25px';
  }};
`;
