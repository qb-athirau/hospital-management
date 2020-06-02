import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../../slices/toasterSlice';
import { toastMessages } from '../../configs/constants';
import { registerPatientAction } from './slice';

export const registerPatient = (registrationDetails) => (dispatch) => {
  dispatch(registerPatientAction(registrationDetails));
  try {
    const { ['confrmPasswrd']: omit, ...payload } = registrationDetails;
    const response = fetchAPI.post(Api.patientRegistrationApi, JSON.stringify(payload));
    response.then((res) => {
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.successRegistrationMsg,
          variant: 'success',
        }),
      );
    });
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
