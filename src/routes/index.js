import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// pages
import { PatientRegistration } from '../pages/PatientRegistration';
import { Login } from '../pages/Login';
import { PageNotFound } from '../pages/PageNotFound';
import { Landing } from '../pages/LandingPage';
import { useUserState } from '../context/UserContext';

const AppRouter = () => {
  // global
  const { isAuthenticated } = useUserState();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page-not-found" component={PageNotFound} />
        <Route path="/register" exact component={PatientRegistration} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
