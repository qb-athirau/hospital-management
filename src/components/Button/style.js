import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  border: 1px solid ${(props) => props.theme.veryLightGrey};
  padding: 6px 16px;
  min-width: 64px;
  line-height: 1.75;
  color: ${(props) => (props.primary ? props.theme.pureWhite : props.theme.veryDarkGrey)};
  text-shadow: 0 1px ${(props) => props.theme.pureWhite};
  cursor: pointer;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border-radius: 3px;
  background: linear-gradient(
    to top,
    ${(props) => props.theme.whiteSmoke} 0%,
    ${(props) => props.theme.whisper} 100%
  );
  box-shadow: 0 1px ${(props) => props.theme.pureWhite} inset,
    0 1px ${(props) => props.theme.gainsboro};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${({ primary }) =>
    primary &&
    css`
      background: ${(props) => props.theme.speechBlue};
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    `}
  K
`;
