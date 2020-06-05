import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../../slices/toasterSlice';
import { toastMessages } from '../../configs/constants';
import {loginAction} from './slice';

export const loginUser = (loginDetails, contextDispatch, history ) => (dispatch) => {
    try {
      const response = fetchAPI.post(
        `${Api.loginApi}?email=${loginDetails.email}&&password=${loginDetails.password}`,
      );
      response
        .then((res) => {
          if (res.data?.length !== 0) {
              dispatch(loginAction(res.data));
              const role= res.data.role;
            const token = getAuthToken();
            token.then((res) => { 
              if (window.localStorage) {
                localStorage.setItem('tempAuthToken', res.data.token);
                localStorage.setItem('role', role);
              }
              contextDispatch({ type: "LOGIN_SUCCESS" });
            });
            dispatch(
              updateToast({
                value: true,
                message: toastMessages.successLogin,
                variant: 'success',
              }),
            );
          } else {
            dispatch(
              updateToast({
                value: true,
                message: toastMessages.wrongEmailPassword,
                variant: 'error',
              }),
            );
          }
        })
    } catch (error) {
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.errorMsg,
          variant: 'error',
        }),
      );
    }
  };

  const getAuthToken = () => {
    return fetchAPI.get(Api.authtokenApi);
  };
  