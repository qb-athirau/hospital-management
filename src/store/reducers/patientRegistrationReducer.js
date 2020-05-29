import { REGISTER_PATIENT } from '../constants/actionTypes';

const initialState = {
  registerPatient: [],
  loading: false,
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case REGISTER_PATIENT:
      return {
        ...state,
        loading: false,
        registerPatient: [...state.registerPatient, action.registrationDetails],
      };
    default:
      return state;
  }
};
