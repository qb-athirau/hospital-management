import { updateToast } from '../../store/actions/commonActions';
import { toastMessages } from '../../configs/constants';

export const responseOnSuccess = (response) => response;

export const responseOnFailed = (error) => (dispatch, history) => {
  const customError = { ...error };
  if (error.response) {
    const status = error.response.headers.status || error.response.status;
    customError.status = status;
    handleError(status, dispatch, history);
  }
  return Promise.reject(customError);
};

const handleError = (status, dispatch, history) => {
  switch (status) {
    case 401:
      window.location.pathname = '/';
      break;
    case 400:
      history.push(window.location.href);
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.errorMsg,
          variant: 'error',
        }),
      );
      break;
    default:
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.errorMsg,
          variant: 'error',
        }),
      );
      break;
  }
};
