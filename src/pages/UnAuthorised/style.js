import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const UnAuthorisedLayout = styled.div`
  height: calc(100% - 50px);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .linkHome {
    margin-top: 2%;
    height: 25px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.luminousRed};
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 25px;
    box-shadow: 0 2px 5px 0 ${(props) => props.theme.transparentWithOpacity};
    span {
      text-decoration: none;
      display: flex;
      color: ${(props) => props.theme.pureWhite};
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

export const Image = styled.img`
  ${media.mobileScreen} {
    width: 100%;
  }
`;

export const Error = styled.div`
  margin-top: 2%;
  font-weight: 300;
`;
