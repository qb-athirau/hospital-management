import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// pages
import { PatientRegistration } from '../pages/PatientRegistration';
import { Login } from '../pages/Login';
import { PageNotFound } from '../pages/PageNotFound';
import { UnAuthorised } from '../pages/UnAuthorised';
import { Landing } from '../pages/LandingPage';
import { Dashboard } from '../pages/Dashboard';
import { useUserState } from '../context/UserContext';
import { AuthRoute } from './authRoute';
import { AuthRoutes } from './route';
import { userRoles } from '../configs/userRoles';
import { Departments } from '../pages/Departments';
import { Doctors } from '../pages/Doctors';

const AppRouter = () => {
  // global
  const { isAuthenticated } = useUserState();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page-not-found" component={PageNotFound} />
        <Route path="/unauthorised" component={UnAuthorised} />
        <Route path="/register" exact component={PatientRegistration} />
        <Route path="/login" component={Login} />
        <Route path="/departments" component={Departments} />
        <Route path="/doctors" component={Doctors} />
        <AuthRoute
          path={AuthRoutes.dashboard}
          Component={Dashboard}
          requiredRoles={userRoles.all}
        />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
