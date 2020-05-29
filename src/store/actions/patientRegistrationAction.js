import { REGISTER_PATIENT } from '../constants/actionTypes';
import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../actions/commonActions';
import { toastMessages }from '../../configs/constants';

export const registerPatientAction = (registrationDetails) => {
  return {
    type: REGISTER_PATIENT,
    registrationDetails,
  };
};

export const registerPatient = (registrationDetails) => (dispatch, getState) => {
  dispatch(registerPatientAction(registrationDetails));
  try {
    const {['confrmPasswrd']: omit, ...payload} = registrationDetails;
    const response = fetchAPI.post(Api.patientRegistrationApi, JSON.stringify(payload))
    response.then((res)=>{
      dispatch(
        updateToast({
          value: true,
          message: toastMessages.successRegistrationMsg,
          variant: 'success',
        }),
      );
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
