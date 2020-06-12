import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../../slices/toasterSlice';
import { toastMessages } from '../../configs/constants';
import {
  setDepartmentStart,
  setDepartments,
  setDepartmentFailure,
  addDepartmentData,
  updateDepartmentData,
  deleteDepartmentData,
} from './slice';

export const getDepartments = () => (dispatch) => {
  try {
    dispatch(setDepartmentStart());
    const response = fetchAPI.get(Api.departmentsApi);
    response.then((res) => {
      dispatch(setDepartments(res?.data));
    });
  } catch (error) {
    dispatch(setDepartmentFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};

export const addDepartment = (data) => (dispatch) => {
  try {
    dispatch(setDepartmentStart());
    const response = fetchAPI.post(Api.departmentsApi, data);
    response.then((res) => {
      dispatch(addDepartmentData(data));
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.addDepartmentSuccess,
          variant: 'success',
        }),
      );
    });
  } catch (error) {
    dispatch(setDepartmentFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};
export const updateDepartment = (data) => (dispatch) => {
  try {
    dispatch(setDepartmentStart());
    const response = fetchAPI.post(Api.departmentsApi, data);
    response.then((res) => {
      dispatch(updateDepartmentData(data));
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.deleteDepartmentSuccess,
          variant: 'success',
        }),
      );
    });
  } catch (error) {
    dispatch(setDepartmentFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};

export const deleteDepartment = (data) => (dispatch) => {
  try {
    dispatch(setDepartmentStart());
    const response = fetchAPI.post(Api.departmentsApi, data);
    response.then((res) => {
      dispatch(deleteDepartmentData(data));
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.deleteDepartmentSuccess,
          variant: 'success',
        }),
      );
    });
  } catch (error) {
    dispatch(setDepartmentFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};

export const errorHandler = (evt, updateToast) => {
  switch (evt.target.error.code) {
    case evt.target.error.NOT_FOUND_ERR:
      updateToast({
        value: true,
        message: toastMessages.fileNotFound,
        variant: 'error',
      });
      break;
    case evt.target.error.NOT_READABLE_ERR:
      updateToast({
        value: true,
        message: toastMessages.fileNotReadable,
        variant: 'error',
      });
      break;
    case evt.target.error.ABORT_ERR:
      break; // noop
    default:
      updateToast({
        value: true,
        message: toastMessages.errorReadingFile,
        variant: 'error',
      });
  }
};
