import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const RegistrationComponent = Loadable({
  loader: () => import('./container'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const PatientRegistration = props => <RegistrationComponent {...props} />;

PatientRegistration.displayName = 'Registration';