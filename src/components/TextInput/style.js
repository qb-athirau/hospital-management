import styled, {css} from 'styled-components';
import { Field } from 'formik';
import { media } from '../../configs/styles/mediaQueries';

export const Input = styled(Field)`
  background-color: ${(props) => props.theme.pureWhite};
  border: 1px solid ${(props) => props.theme.veryLightGrey};
  border-radius: 4px;
  font-size: 0.8rem;
  line-height: 1rem;
  font-style: normal;
  font-weight: 400;
  width: 230px;
  padding: 0.25rem 0.75rem;
  outline: none;
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid ${(props) => props.theme.valid};
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${(props) => props.theme.errorRed};
      outline: none;

    `}
  ${media.mediumScreen} {
    border-radius: 0;
  }
`;

export default Input;
