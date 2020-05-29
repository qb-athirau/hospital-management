import { SET_TOAST } from '../constants/actionTypes';

const initialState = {
  toastObj: {
    value: false,
    message: '',
    variant: '',
  },
};

const commonReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_TOAST:
      return {
        ...state,
        toastObj: action.toastObj,
      };
    default:
      return state;
  }
};
export default commonReducer;
