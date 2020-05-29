import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import MainLoaderWrapper from './style';

const MainLoader = () => (
  <MainLoaderWrapper>
    <MainLoaderWrapper.LoaderVideo autoPlay loop muted playsInline>
      <FontAwesomeIcon spin icon={faSpinner} />
    </MainLoaderWrapper.LoaderVideo>
  </MainLoaderWrapper>
);

export default MainLoader;
