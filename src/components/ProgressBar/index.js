import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProgressBarDiv, FillerDiv, ProgressBarStarDiv, ProgressBarWrapper } from './style';

const Filler = (props) => {
  return <FillerDiv percentage={props.percentage} className="progress-fill"></FillerDiv>;
};

const ProgressBar = (props) => {
  return (
    <ProgressBarWrapper className="progress-wrap">
      <ProgressBarDiv>
        <Filler percentage={props.percentage} />
      </ProgressBarDiv>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
