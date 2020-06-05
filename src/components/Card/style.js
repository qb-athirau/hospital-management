import styled, { css, keyframes } from 'styled-components';

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const primaryCss = css`
  background-color: ${(props) => props.theme.primaryBlue};
  color: ${(props) => props.theme.pureWhite};
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${(props) => (props.noPadding ? 0 : '15px')};
  opacity: 0;
  transform: translateY(50px);
  transition: 500ms all ease-in-out;
  margin: ${(props) => (props.noMargin ? 0 : '15px')};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  border-radius: 5px;
  ${(props) => props.animated && animatedCss}
  ${(props) => props.primary && primaryCss}
`;
