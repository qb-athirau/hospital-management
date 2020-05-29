import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const LoginComponent = Loadable({
  loader: () => import('./container'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const Login = props => <LoginComponent {...props} />;

Login.displayName = 'Login';