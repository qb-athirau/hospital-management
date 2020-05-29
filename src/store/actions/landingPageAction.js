import { NEWSFEED } from '../constants/actionTypes';
import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../actions/commonActions';
import { toastMessages }from '../../configs/constants';

export const landingPageAction = (newsFeedData) => {
  return {
    type: NEWSFEED,
    newsFeedData,
  };
};

export const getNewsfeedData = () => (dispatch) => {
  try {
    const response = fetchAPI.post(Api.newsfeedApi);
    response.then((res)=>{
        dispatch(landingPageAction(res?.data?.data));
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
