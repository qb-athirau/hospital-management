import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { media } from '../../configs/styles/mediaQueries';

export const ModalWrap = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 410px;
  width: 600px;
  margin: auto;
  .paper {
    height: 400px;
    width: 600px;
    border: 1px solid ${(props) => props.theme.veryLightGrey};
    border-radius: 10px;
    background-color: ${(props) => props.theme.pureWhite};
    padding: 2px 4px 3px;
  }
`;
