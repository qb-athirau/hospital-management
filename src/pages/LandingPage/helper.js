import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../../slices/toasterSlice';
import { toastMessages } from '../../configs/constants';
import { setNewsFeed } from './slice';

export const getNewsfeedData = () => (dispatch) => {
  try {
    const response = fetchAPI.get(Api.newsfeedApi);
    response.then((res) => {
      dispatch(setNewsFeed(res?.data?.data));
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
