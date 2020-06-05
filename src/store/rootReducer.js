import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../pages/Login/slice';
import landingReducer from '../pages/LandingPage/slice';
import registrationReducer from '../pages/PatientRegistration/slice';
import toasterReducer from '../slices/toasterSlice';

const reducerList = {
    login: loginReducer,
    landing: landingReducer,
    register: registrationReducer,
    toaster: toasterReducer,
};

const rootReducer = combineReducers(reducerList);

export default rootReducer;