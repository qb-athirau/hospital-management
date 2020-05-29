import React from 'react';

const KEY = 'tempAuthToken';
const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();
function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, error: false };
    case 'SIGN_OUT_SUCCESS':
      return { ...state, isAuthenticated: false };
    case 'LOGIN_FAILURE':
      return { ...state, error: true };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem(KEY),
    error: false,
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

function signOut(dispatch, history) {
  localStorage.removeItem(KEY);
  dispatch({ type: 'SIGN_OUT_SUCCESS' });
}

export { UserProvider, useUserState, useUserDispatch, signOut };
