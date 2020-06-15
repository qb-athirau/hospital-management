import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const UnAuthorisedComponent = Loadable({
  loader: () => import('./component'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const UnAuthorised = props => <UnAuthorisedComponent {...props} />;

UnAuthorised.displayName = 'UnAuthorised';