import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { media } from '../../configs/styles/mediaQueries';

export const ModalWrap = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  outline: none;
  ${media.mediumScreen} {
    height: 420px;
    width: 600px;
  }
  .paper {
    width: 100%;
    height: 100%;
    ${media.mediumScreen} {
      height: 420px;
      width: 600px;
      overflow-y: auto;
    }
    border: 1px solid ${(props) => props.theme.veryLightGrey};
    border-radius: 10px;
    background-color: ${(props) => props.theme.pureWhite};
    padding: 2px 4px 3px;
  }
  .close-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 25px;
    color: ${(props) => props.theme.veryLightGrey};
  }

  .wrapper {
    width: 350px;
    &.MuiFormLabel-root {
      font-size: 12px;
      padding-left: 10px;
    }
  }
`;
