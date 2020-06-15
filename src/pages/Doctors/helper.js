import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../../slices/toasterSlice';
import { toastMessages } from '../../configs/constants';
import {
  setDoctorListStart,
  setDoctorsList,
  setsetDoctorsListFailure,
  addDoctorData,
  updateDoctorData,
  deleteDoctorData,
} from './slice';

export const getDoctorsList = () => (dispatch) => {
  try {
    dispatch(setDoctorListStart());
    const response = fetchAPI.get(Api.doctorsApi);
    response.then((res) => {
      dispatch(setDoctorsList(res?.data));
    });
  } catch (error) {
    dispatch(setsetDoctorsListFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};

export const addDoctor = (data) => (dispatch) => {
  try {
    const newData = {
      ...data,
      dateOfJoining: new Date(data.dateOfJoining).toISOString(),
    };
    dispatch(setDoctorListStart());
    const response = fetchAPI.post(Api.doctorsApi, newData);
    response.then((res) => {
      dispatch(addDoctorData(data));
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.addDepartmentSuccess,
          variant: 'success',
        }),
      );
    });
  } catch (error) {
    dispatch(setsetDoctorsListFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};
export const updateDoctor = (data) => (dispatch) => {
  try {
    dispatch(setDoctorListStart());
    const response = fetchAPI.post(Api.doctorsApi, data);
    response.then((res) => {
      dispatch(updateDoctorData(data));
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.deleteDepartmentSuccess,
          variant: 'success',
        }),
      );
    });
  } catch (error) {
    dispatch(setsetDoctorsListFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};

export const deleteDoctor = (data) => (dispatch) => {
  try {
    dispatch(setDoctorListStart());
    const response = fetchAPI.post(Api.doctorsApi, data);
    response.then((res) => {
      dispatch(deleteDoctorData(data));
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.deleteDepartmentSuccess,
          variant: 'success',
        }),
      );
    });
  } catch (error) {
    dispatch(setsetDoctorsListFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};
