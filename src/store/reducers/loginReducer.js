import { LOGIN } from './constants/actionTypes';

const initialState = {
  userDetails: {},
};
// Handles signup related actions
export default loginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userDetails: action.loginDetails,
      };
    default:
      return state;
  }
};
