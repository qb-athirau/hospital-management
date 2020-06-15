import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const DashboardComponent = Loadable({
  loader: () => import('./component'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const Dashboard = props => <DashboardComponent {...props} />;

Dashboard.displayName = 'Dashboard';