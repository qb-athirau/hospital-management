import React, { useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NonAuthRoutes } from './route';
import { UserRoleContext } from '../context/UserRoleContext';

export const AuthRoute = ({ Component, path, exact = false, requiredRoles }) => {
  const isAuthed = !!localStorage.getItem('tempAuthToken');
  const [userRole, setUserRole] = useState(localStorage.getItem('role'));
  const userHasRequiredRole = requiredRoles.includes(userRole);
  const message = userHasRequiredRole
    ? 'Please login to view this page'
    : `You don't have access to this page`;
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isAuthed && userHasRequiredRole ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: userHasRequiredRole ? NonAuthRoutes.login : NonAuthRoutes.unAuthorised,
              state: { message, requestedPath: path },
            }}
          />
        )
      }
    />
  );
};
