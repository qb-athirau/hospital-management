import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../pages/Login/slice';
import landingReducer from '../pages/LandingPage/slice';
import registrationReducer from '../pages/PatientRegistration/slice';
import departmentsReducer from '../pages/Departments/slice';
import doctorsReducer from '../pages/Doctors/slice';
import toasterReducer from '../slices/toasterSlice';


const reducerList = {
    login: loginReducer,
    landing: landingReducer,
    register: registrationReducer,
    departments: departmentsReducer,
    doctors: doctorsReducer,
    toaster: toasterReducer,
};

const rootReducer = combineReducers(reducerList);

export default rootReducer;
