import moment from 'moment';
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
  setAppointment,
} from './slice';

export const getDoctorsList = () => async (dispatch) => {
  try {
    dispatch(setDoctorListStart());
    const response = await fetchAPI.get(Api.doctorsApi);
    dispatch(setDoctorsList(response?.data));
    return response;
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
export const getAppointment = () => (dispatch) => {
  try {
    dispatch(setDoctorListStart());
    const response = fetchAPI.get(Api.appoinntmentsApi);
    response.then((res) => {
      dispatch(setAppointment(res.data));
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
export const addAppointment = (data) => (dispatch) => {
  try {
    dispatch(setDoctorListStart());
    const response = fetchAPI.post(Api.appoinntmentsApi, data);
    response.then((res) => {
      dispatch(addAppointment(data));
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

export const getAvailableTimeSlot = (appointments, selectedDateTime) => {
  const sortedAppointments = [...appointments].sort((app1, app2) => {
    const a = new Date(app1.dateOfAppointment);
    const b = new Date(app2.dateOfAppointment);
    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });
  return sortedAppointments.map((appointment) => {
    const appointmentDate = new Date(appointment.dateOfAppointment);
    const selected = new Date(selectedDateTime);
    if (appointmentDate.toDateString() === selected.toDateString()) {
      return ` ${moment(appointmentDate).subtract(15, 'minutes').format('hh:mm a')}, ${moment(
        appointmentDate,
      )
        .add(15, 'minutes')
        .format('hh:mm a')} - `;
    }
  });
};
