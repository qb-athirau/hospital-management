import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const DepartmentsComponent = Loadable({
  loader: () => import('./container'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const Departments = props => <DepartmentsComponent {...props} />;

Departments.displayName = 'Dashboard';