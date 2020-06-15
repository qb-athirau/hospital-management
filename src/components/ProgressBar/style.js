import styled from 'styled-components';

export const FillerDiv = styled.div`
  width: ${(props) => `${props.percentage}%`};
  background: ${(props) => props.theme.flatBlue};
  font-family: Gilroy-Light;
  font-size: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;

export const ProgressBarDiv = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.intermediateGrey};
  height: 6px;
  // width: calc(100% - 35px);
  width: 100%;
  border-radius: 4px;
  z-index: 1;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-left: 5px;
`;
