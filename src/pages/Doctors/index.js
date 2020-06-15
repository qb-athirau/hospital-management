import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const DoctorsComponent = Loadable({
  loader: () => import('./container'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const Doctors = props => <DoctorsComponent {...props} />;

Doctors.displayName = 'Doctors';