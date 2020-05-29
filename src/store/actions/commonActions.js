import { SET_TOAST } from '../constants/actionTypes';

export const updateToast = (toastObj) => ({
  type: SET_TOAST,
  toastObj,
});
