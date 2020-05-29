import { combineReducers } from 'redux';

import patientRegistartionReducer from './patientRegistrationReducer';
import commonReducer from './commonReducer';
import landingPageReducer from './landingPageReducer';

import { LOGOUT } from '../constants/actionTypes';

const appReducer = combineReducers({
  patientRegister: patientRegistartionReducer,
  commonReducer: commonReducer,
  landingPageReducer: landingPageReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
